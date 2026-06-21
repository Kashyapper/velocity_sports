import urllib.request
import xml.etree.ElementTree as ET
import json
import time
import os

def update_cricket_data():
    print("Updating cricket data...")
    workspace_dir = os.path.dirname(os.path.abspath(__file__))
    
    # 1. Update Scores
    scores_url = "https://rss.cricinfo.com/rss/livescores.xml"
    scores_data = []
    try:
        req = urllib.request.Request(scores_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            xml_content = response.read()
            root = ET.fromstring(xml_content)
            for item in root.findall('.//item'):
                title = item.find('title').text
                link = item.find('link').text
                desc = item.find('description').text if item.find('description') is not None else ""
                
                # Try to parse teams and score
                # Format: Northamptonshire 465/10  v Gloucestershire 233/5 *
                # Or: West Indies v South Africa
                parts = title.split(' v ')
                if len(parts) == 2:
                    away_team_score = parts[0].strip()
                    home_team_score = parts[1].strip()
                else:
                    parts = title.split(' vs ')
                    if len(parts) == 2:
                        away_team_score = parts[0].strip()
                        home_team_score = parts[1].strip()
                    else:
                        away_team_score = title
                        home_team_score = ""
                
                scores_data.append({
                    "title": title,
                    "link": link,
                    "away": away_team_score,
                    "home": home_team_score,
                    "description": desc,
                    "status": "Live/Recent" # RSS usually only has active games
                })
        
        with open(os.path.join(workspace_dir, "cricket_scores.json"), "w") as f:
            json.dump(scores_data, f, indent=2)
        print(f"Saved {len(scores_data)} cricket scores.")
    except Exception as e:
        print("Error updating cricket scores:", e)

    # 2. Update News
    news_url = "https://www.espncricinfo.com/rss/content/story/feeds/0.xml"
    news_data = []
    try:
        req = urllib.request.Request(news_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            xml_content = response.read()
            root = ET.fromstring(xml_content)
            for item in root.findall('.//item'):
                title = item.find('title').text
                link = item.find('link').text
                desc = item.find('description').text if item.find('description') is not None else ""
                image = item.find('coverImages').text if item.find('coverImages') is not None else ""
                
                news_data.append({
                    "headline": title,
                    "description": desc,
                    "link": link,
                    "image": image,
                    "source": "ESPN Cricinfo"
                })
        
        with open(os.path.join(workspace_dir, "cricket_news.json"), "w") as f:
            json.dump(news_data, f, indent=2)
        print(f"Saved {len(news_data)} cricket news articles.")
    except Exception as e:
        print("Error updating cricket news:", e)

if __name__ == "__main__":
    import sys
    if "--once" in sys.argv:
        update_cricket_data()
    else:
        while True:
            try:
                update_cricket_data()
            except Exception as e:
                print("Loop error:", e)
            print("Sleeping for 5 minutes...")
            time.sleep(300)
