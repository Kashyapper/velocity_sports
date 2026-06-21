// Tab Switching Logic
function switchTab(tabId) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.add('hidden');
        content.classList.remove('block', 'flex');
    });
    
    // Show selected tab content
    const activeContent = document.getElementById(`content-${tabId}`);
    if (activeContent) {
        if (tabId === 'gemini' || tabId === 'chat') {
            activeContent.classList.remove('hidden');
            activeContent.classList.add('flex');
        } else {
            activeContent.classList.remove('hidden');
            activeContent.classList.add('block');
        }
    }

    // Reset all tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('bg-red-600', 'text-white');
        btn.classList.add('text-gray-400', 'hover:text-white', 'hover:bg-gray-700');
    });

    // Highlight active tab button
    const activeBtn = document.getElementById(`tab-${tabId}`);
    if (activeBtn) {
        activeBtn.classList.add('bg-red-600', 'text-white');
        activeBtn.classList.remove('text-gray-400', 'hover:text-white', 'hover:bg-gray-700');
    }

    // Load data if switching to sports tabs
    if (tabId === 'football') {
        loadFootballData();
    } else if (tabId === 'soccer') {
        loadSoccerData();
    } else if (tabId === 'tennis') {
        loadTennisData();
    } else if (tabId === 'basketball') {
        loadBasketballData();
    } else if (tabId === 'baseball') {
        loadBaseballData();
    } else if (tabId === 'cricket') {
        loadCricketData();
    }
}

// Football Sub-tab Switching
function switchFootballSubTab(subTabId) {
    document.querySelectorAll('.football-subcontent').forEach(content => {
        content.classList.add('hidden');
        content.classList.remove('block');
    });

    const activeContent = document.getElementById(`football-${subTabId}`);
    if (activeContent) {
        activeContent.classList.remove('hidden');
        activeContent.classList.add('block');
    }

    document.querySelectorAll('.subtab-football-btn').forEach(btn => {
        btn.classList.remove('border-red-500', 'text-white');
        btn.classList.add('border-transparent', 'text-gray-400', 'hover:text-white');
    });

    const activeBtn = document.getElementById(`subtab-football-${subTabId}`);
    if (activeBtn) {
        activeBtn.classList.add('border-red-500', 'text-white');
        activeBtn.classList.remove('border-transparent', 'text-gray-400');
    }
}

// Soccer Sub-tab Switching
function switchSoccerSubTab(subTabId) {
    document.querySelectorAll('.soccer-subcontent').forEach(content => {
        content.classList.add('hidden');
        content.classList.remove('block');
    });

    const activeContent = document.getElementById(`soccer-${subTabId}`);
    if (activeContent) {
        activeContent.classList.remove('hidden');
        activeContent.classList.add('block');
    }

    document.querySelectorAll('.subtab-soccer-btn').forEach(btn => {
        btn.classList.remove('border-red-500', 'text-white');
        btn.classList.add('border-transparent', 'text-gray-400', 'hover:text-white');
    });

    const activeBtn = document.getElementById(`subtab-soccer-${subTabId}`);
    if (activeBtn) {
        activeBtn.classList.add('border-red-500', 'text-white');
        activeBtn.classList.remove('border-transparent', 'text-gray-400');
    }
}

// Tennis Sub-tab Switching
function switchTennisSubTab(subTabId) {
    document.querySelectorAll('.tennis-subcontent').forEach(content => {
        content.classList.add('hidden');
        content.classList.remove('block');
    });
    const activeContent = document.getElementById(`tennis-${subTabId}`);
    if (activeContent) {
        activeContent.classList.remove('hidden');
        activeContent.classList.add('block');
    }
    document.querySelectorAll('.subtab-tennis-btn').forEach(btn => {
        btn.classList.remove('border-red-500', 'text-white');
        btn.classList.add('border-transparent', 'text-gray-400', 'hover:text-white');
    });
    const activeBtn = document.getElementById(`subtab-tennis-${subTabId}`);
    if (activeBtn) {
        activeBtn.classList.add('border-red-500', 'text-white');
        activeBtn.classList.remove('border-transparent', 'text-gray-400');
    }
}

// Basketball Sub-tab Switching
function switchBasketballSubTab(subTabId) {
    document.querySelectorAll('.basketball-subcontent').forEach(content => {
        content.classList.add('hidden');
        content.classList.remove('block');
    });
    const activeContent = document.getElementById(`basketball-${subTabId}`);
    if (activeContent) {
        activeContent.classList.remove('hidden');
        activeContent.classList.add('block');
    }
    document.querySelectorAll('.subtab-basketball-btn').forEach(btn => {
        btn.classList.remove('border-red-500', 'text-white');
        btn.classList.add('border-transparent', 'text-gray-400', 'hover:text-white');
    });
    const activeBtn = document.getElementById(`subtab-basketball-${subTabId}`);
    if (activeBtn) {
        activeBtn.classList.add('border-red-500', 'text-white');
        activeBtn.classList.remove('border-transparent', 'text-gray-400');
    }
}

// Baseball Sub-tab Switching
function switchBaseballSubTab(subTabId) {
    document.querySelectorAll('.baseball-subcontent').forEach(content => {
        content.classList.add('hidden');
        content.classList.remove('block');
    });
    const activeContent = document.getElementById(`baseball-${subTabId}`);
    if (activeContent) {
        activeContent.classList.remove('hidden');
        activeContent.classList.add('block');
    }
    document.querySelectorAll('.subtab-baseball-btn').forEach(btn => {
        btn.classList.remove('border-red-500', 'text-white');
        btn.classList.add('border-transparent', 'text-gray-400', 'hover:text-white');
    });
    const activeBtn = document.getElementById(`subtab-baseball-${subTabId}`);
    if (activeBtn) {
        activeBtn.classList.add('border-red-500', 'text-white');
        activeBtn.classList.remove('border-transparent', 'text-gray-400');
    }
}

// Cricket Sub-tab Switching
function switchCricketSubTab(subTabId) {
    document.querySelectorAll('.cricket-subcontent').forEach(content => {
        content.classList.add('hidden');
        content.classList.remove('block');
    });
    const activeContent = document.getElementById(`cricket-${subTabId}`);
    if (activeContent) {
        activeContent.classList.remove('hidden');
        activeContent.classList.add('block');
    }
    document.querySelectorAll('.subtab-cricket-btn').forEach(btn => {
        btn.classList.remove('border-red-500', 'text-white');
        btn.classList.add('border-transparent', 'text-gray-400', 'hover:text-white');
    });
    const activeBtn = document.getElementById(`subtab-cricket-${subTabId}`);
    if (activeBtn) {
        activeBtn.classList.add('border-red-500', 'text-white');
        activeBtn.classList.remove('border-transparent', 'text-gray-400');
    }
}

// --- Helper Utilities ---
function isWithinPast72Hours(dateString) {
    const gameDate = new Date(dateString);
    const now = new Date();
    const diffTime = now - gameDate;
    if (diffTime < 0) return false; // Future game
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    return diffDays <= 3;
}

function formatGameDate(dateString) {
    const options = { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// --- State & Helpers ---
const activeLeagues = {
    football: 'nfl',
    soccer: 'fifa.world',
    tennis: 'atp',
    basketball: 'nba',
    baseball: 'mlb',
    cricket: 'all'
};

const reigningChampions = {
    'nfl': { winner: 'Philadelphia Eagles', title: 'Reigning Super Bowl Champions' },
    'ufl': { winner: 'Birmingham Stallions', title: 'UFL Champions' },
    'college-football': { winner: 'Ohio State Buckeyes', title: 'Reigning National Champions' },
    'fifa.world': { winner: 'Argentina', title: 'Defending World Cup Champions' },
    'eng.1': { winner: 'Arsenal', title: 'Reigning 2025-26 Premier League Champions' },
    'usa.1': { winner: 'Columbus Crew', title: 'Reigning MLS Cup Champions' },
    'uefa.champions': { winner: 'Paris Saint-Germain', title: 'Reigning 2026 Champions League Winners' },
    'atp': { winner: 'Jannik Sinner', title: 'ATP World No. 1' },
    'wta': { winner: 'Iga Swiatek', title: 'WTA World No. 1' },
    'nba': { winner: 'New York Knicks', title: 'Reigning 2026 NBA Champions' },
    'wnba': { winner: 'New York Liberty', title: 'Reigning WNBA Champions' },
    'mens-college-basketball': { winner: 'UConn Huskies', title: 'Reigning National Champions' },
    'mlb': { winner: 'Los Angeles Dodgers', title: 'Reigning World Series Champions' },
    'college-baseball': { winner: 'Tennessee Volunteers', title: 'Reigning College World Series Champions' }
};

function getDateRange() {
    const d = new Date();
    d.setDate(d.getDate() - 3);
    const start = d.toISOString().slice(0, 10).replace(/-/g, '');
    d.setDate(d.getDate() + 13); // +10 days from now
    const end = d.toISOString().slice(0, 10).replace(/-/g, '');
    return `${start}-${end}`;
}

function switchLeague(sport, league) {
    activeLeagues[sport] = league;
    document.querySelectorAll(`.league-${sport}-btn`).forEach(btn => {
        btn.classList.remove('bg-red-600', 'text-white');
        btn.classList.add('bg-transparent', 'text-gray-400', 'hover:text-white');
    });
    
    // Use getElementById directly (handles dots safely)
    const activeBtn = document.getElementById(`league-${sport}-${league}`);
    if (activeBtn) {
        activeBtn.classList.add('bg-red-600', 'text-white');
        activeBtn.classList.remove('bg-transparent', 'text-gray-400', 'hover:text-white');
    }

    if (sport === 'football') { footballLoaded = false; loadFootballData(); }
    else if (sport === 'soccer') { soccerLoaded = false; loadSoccerData(); }
    else if (sport === 'tennis') { tennisLoaded = false; loadTennisData(); }
    else if (sport === 'basketball') { basketballLoaded = false; loadBasketballData(); }
    else if (sport === 'baseball') { baseballLoaded = false; loadBaseballData(); }
    else if (sport === 'cricket') loadCricketData();
}

function getMatchCompetitors(comp) {
    if (!comp || !comp.competitors) return { away: null, home: null };
    const comps = comp.competitors;
    let away = comps.find(c => c.homeAway === 'away') || comps[0];
    let home = comps.find(c => c.homeAway === 'home') || comps[1] || comps[0];
    
    // In individual sports like Tennis, both competitors might be marked 'away' or missing
    if (comps.length >= 2 && !comps.some(c => c.homeAway === 'home')) {
        away = comps[0];
        home = comps[1];
    }
    return { away, home };
}

function getCompetitorDetails(comp) {
    if (!comp) return { name: 'TBD', logo: '', score: '0' };
    
    let name = 'TBD';
    let logo = '';
    let score = comp.score ?? '0';

    if (comp.team) {
        name = comp.team.displayName || comp.team.name || 'TBD';
        logo = comp.team.logo || '';
    } else if (comp.athlete) {
        name = comp.athlete.displayName || comp.athlete.shortName || comp.athlete.fullName || 'TBD';
        logo = comp.athlete.flag?.href || '';
    }

    // Parse tennis set scores from linescores
    if (comp.linescores && comp.linescores.length > 0) {
        const setScores = comp.linescores.map(s => s.value !== undefined ? Math.round(s.value) : s).join(' ');
        if (!comp.team || score === '0' || score === null) {
            score = setScores;
        }
    }

    return { name, logo, score: score || '0' };
}

// --- Generic Render Function for Scores ---
window.eventsMap = window.eventsMap || {};

function renderScores(events, resultsContainerId, upcomingContainerId, league = '', sport = '') {
    const resultsContainer = document.getElementById(resultsContainerId);
    const upcomingContainer = document.getElementById(upcomingContainerId);

    const finishedGames = [];
    const upcomingGames = [];
    const liveGames = [];

    events.forEach(event => {
        if (event.id) window.eventsMap[event.id] = event;
        const state = event.status?.type?.state;
        if (state === 'post') {
            if (isWithinPast72Hours(event.date)) {
                finishedGames.push(event);
            }
        } else if (state === 'in') {
            liveGames.push(event);
        } else if (state === 'pre') {
            upcomingGames.push(event);
        }
    });

    const allResults = [...liveGames, ...finishedGames];
    if (allResults.length === 0) {
        const champInfo = reigningChampions[league] || { winner: 'Champion TBD', title: 'Reigning Champion' };
        resultsContainer.innerHTML = `
            <div class="bg-gray-800 p-6 rounded-2xl border border-gray-700 text-center space-y-3">
                <div class="w-12 h-12 bg-yellow-500/10 border border-yellow-500/30 rounded-full flex items-center justify-center mx-auto text-yellow-500 text-2xl">
                    <i class="fas fa-trophy"></i>
                </div>
                <div>
                    <h4 class="text-base font-bold text-white">League in Offseason / Tournament Break</h4>
                    <p class="text-xs text-gray-400 mt-1">No recent or live games scheduled in this window.</p>
                </div>
                <div class="pt-2">
                    <span class="inline-flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-xl border border-yellow-500/20 text-yellow-400 text-xs font-semibold">
                        <i class="fas fa-crown text-yellow-500"></i> ${champInfo.title}: <strong class="text-white">${champInfo.winner}</strong>
                    </span>
                </div>
            </div>
        `;
    } else {
        resultsContainer.innerHTML = allResults.map(event => {
            const comp = event.competitions ? event.competitions[0] : event;
            const { away: awayComp, home: homeComp } = getMatchCompetitors(comp);
            
            const home = getCompetitorDetails(homeComp);
            const away = getCompetitorDetails(awayComp);

            const isLive = event.status?.type?.state === 'in';
            const statusClass = isLive ? 'bg-red-600 text-white animate-pulse' : 'bg-gray-700 text-gray-300';
            const statusText = isLive ? (event.status?.type?.detail || 'LIVE') : 'FINAL';

            return `
                <div onclick="openGameModal('${event.id || ''}', '${sport}', '${league}')" class="bg-gray-800 p-4 rounded-xl border border-gray-700 flex justify-between items-center cursor-pointer hover:border-red-500 hover:bg-gray-750 transition-all shadow-md">
                    <div class="flex-grow space-y-2">
                        <div class="flex justify-between items-center">
                            <span class="flex items-center gap-2 font-semibold">
                                <img src="${away.logo}" onerror="this.style.display='none'" class="w-6 h-6 object-contain">
                                ${away.name}
                            </span>
                            <span class="font-bold text-lg ${isLive ? 'text-red-500' : 'text-gray-300'}">${away.score}</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="flex items-center gap-2 font-semibold">
                                <img src="${home.logo}" onerror="this.style.display='none'" class="w-6 h-6 object-contain">
                                ${home.name}
                            </span>
                            <span class="font-bold text-lg ${isLive ? 'text-red-500' : 'text-gray-300'}">${home.score}</span>
                        </div>
                    </div>
                    <div class="ml-6 pl-6 border-l border-gray-700 text-right min-w-[90px]">
                        <span class="text-xs px-2 py-1 rounded font-bold uppercase ${statusClass}">${statusText}</span>
                        <p class="text-xs text-gray-500 mt-2">${formatGameDate(event.date)}</p>
                    </div>
                </div>
            `;
        }).join('');
    }

    if (upcomingGames.length === 0) {
        upcomingContainer.innerHTML = `
            <div class="bg-gray-800 p-6 rounded-2xl border border-gray-700 text-center text-gray-400">
                <i class="fas fa-calendar-alt text-2xl mb-2 text-gray-500"></i>
                <p class="text-xs">No upcoming games scheduled in the current window.</p>
            </div>
        `;
    } else {
        upcomingContainer.innerHTML = upcomingGames.map(event => {
            const comp = event.competitions ? event.competitions[0] : event;
            const { away: awayComp, home: homeComp } = getMatchCompetitors(comp);
            
            const home = getCompetitorDetails(homeComp);
            const away = getCompetitorDetails(awayComp);

            return `
                <div onclick="openGameModal('${event.id || ''}', '${sport}', '${league}')" class="bg-gray-800 p-4 rounded-xl border border-gray-700 flex justify-between items-center cursor-pointer hover:border-blue-500 hover:bg-gray-750 transition-all shadow-md">
                    <div class="flex-grow space-y-1">
                        <div class="flex items-center gap-2 font-semibold">
                            <img src="${away.logo}" onerror="this.style.display='none'" class="w-5 h-5 object-contain">
                            ${away.name}
                        </div>
                        <div class="text-xs text-gray-500 font-bold px-2">@</div>
                        <div class="flex items-center gap-2 font-semibold">
                            <img src="${home.logo}" onerror="this.style.display='none'" class="w-5 h-5 object-contain">
                            ${home.name}
                        </div>
                    </div>
                    <div class="ml-6 pl-6 border-l border-gray-700 text-right min-w-[90px]">
                        <span class="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded font-bold">UPCOMING</span>
                        <p class="text-xs text-gray-400 mt-2 font-medium">${formatGameDate(event.date)}</p>
                    </div>
                </div>
            `;
        }).join('');
    }
}

// --- Generic Render Function for News ---
function renderNews(articles, gridId) {
    const grid = document.getElementById(gridId);
    if (!articles || articles.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full bg-gray-800 p-6 rounded-xl border border-gray-700 text-center text-gray-400">
                <p>No recent news available.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = articles.slice(0, 6).map(item => {
        const image = item.images?.[0]?.url || item.image || 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=500&auto=format&fit=crop&q=60';
        const link = item.links?.web?.href || item.link || '#';
        const headline = item.headline;
        const source = item.source || 'ESPN';

        return `
            <div class="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-red-500 transition-all duration-300 flex flex-col">
                <img src="${image}" alt="${headline}" class="w-full h-40 object-cover">
                <div class="p-4 flex-grow flex flex-col justify-between">
                    <div>
                        <span class="text-xs text-red-400 font-bold uppercase">${source}</span>
                        <h4 class="font-bold text-md mt-1 mb-3 hover:text-red-400 transition-colors">
                            <a href="${link}" target="_blank">${headline}</a>
                        </h4>
                    </div>
                    <a href="${link}" target="_blank" class="text-sm text-gray-400 hover:text-white flex items-center gap-1 self-start">
                        Read Full Article <i class="fas fa-external-link-alt text-xs"></i>
                    </a>
                </div>
            </div>
        `;
    }).join('');
}

// --- Data Loading Functions ---

let footballLoaded = false;
async function loadFootballData(force = false) {
    if (footballLoaded && !force) return;
    try {
        const league = activeLeagues.football;
        const [scoreRes, newsRes] = await Promise.all([
            fetch(`https://site.api.espn.com/apis/site/v2/sports/football/${league}/scoreboard?dates=${getDateRange()}`).then(r => r.json()),
            fetch(`https://site.api.espn.com/apis/site/v2/sports/football/${league}/news`).then(r => r.json()).catch(() => ({ articles: [] }))
        ]);
        renderScores(scoreRes.events || [], 'football-recent-results-list', 'football-upcoming-games-list', league, 'football');
        renderNews(newsRes.articles, 'football-news-grid');
        footballLoaded = true;
    } catch (error) {
        console.error('Failed to load football data:', error);
        document.getElementById('football-recent-results-list').innerHTML = `<p class="text-red-500">Error loading scores.</p>`;
    }
}

let soccerLoaded = false;
async function loadSoccerData(force = false) {
    if (soccerLoaded && !force) return;
    try {
        const league = activeLeagues.soccer;
        const [scoreRes, newsRes] = await Promise.all([
            fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/${league}/scoreboard?dates=${getDateRange()}`).then(r => r.json()),
            fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/${league}/news`).then(r => r.json()).catch(() => ({ articles: [] }))
        ]);
        renderScores(scoreRes.events || [], 'soccer-recent-results-list', 'soccer-upcoming-games-list', league, 'soccer');
        renderNews(newsRes.articles, 'soccer-news-grid');
        soccerLoaded = true;
    } catch (error) {
        console.error('Failed to load soccer data:', error);
        document.getElementById('soccer-recent-results-list').innerHTML = `<p class="text-red-500">Error loading scores.</p>`;
    }
}

let tennisLoaded = false;
async function loadTennisData(force = false) {
    if (tennisLoaded && !force) return;
    try {
        const league = activeLeagues.tennis;
        const [scoreRes, newsRes] = await Promise.all([
            fetch(`https://site.api.espn.com/apis/site/v2/sports/tennis/${league}/scoreboard?dates=${getDateRange()}`).then(r => r.json()),
            fetch(`https://site.api.espn.com/apis/site/v2/sports/tennis/${league}/news`).then(r => r.json()).catch(() => ({ articles: [] }))
        ]);
        const allEvents = scoreRes.events || [];
        const flattenedMatches = [];
        allEvents.forEach(tournament => {
            if (tournament.groupings) {
                tournament.groupings.forEach(grouping => {
                    if (grouping.competitions) {
                        grouping.competitions.forEach(match => {
                            flattenedMatches.push({
                                id: match.id,
                                date: match.date,
                                status: match.status,
                                competitions: [match]
                            });
                        });
                    }
                });
            } else if (tournament.competitions) {
                tournament.competitions.forEach(match => {
                    flattenedMatches.push({
                        id: match.id,
                        date: match.date,
                        status: match.status,
                        competitions: [match]
                    });
                });
            }
        });
        renderScores(flattenedMatches, 'tennis-recent-results-list', 'tennis-upcoming-games-list', league, 'tennis');
        renderNews(newsRes.articles, 'tennis-news-grid');
        tennisLoaded = true;
    } catch (error) {
        console.error('Failed to load tennis data:', error);
        document.getElementById('tennis-recent-results-list').innerHTML = `<p class="text-red-500">Error loading scores.</p>`;
    }
}

let basketballLoaded = false;
async function loadBasketballData(force = false) {
    if (basketballLoaded && !force) return;
    try {
        const league = activeLeagues.basketball;
        const [scoreRes, newsRes] = await Promise.all([
            fetch(`https://site.api.espn.com/apis/site/v2/sports/basketball/${league}/scoreboard?dates=${getDateRange()}`).then(r => r.json()),
            fetch(`https://site.api.espn.com/apis/site/v2/sports/basketball/${league}/news`).then(r => r.json()).catch(() => ({ articles: [] }))
        ]);
        renderScores(scoreRes.events || [], 'basketball-recent-results-list', 'basketball-upcoming-games-list', league, 'basketball');
        renderNews(newsRes.articles, 'basketball-news-grid');
        basketballLoaded = true;
    } catch (error) {
        console.error('Failed to load basketball data:', error);
        document.getElementById('basketball-recent-results-list').innerHTML = `<p class="text-red-500">Error loading scores.</p>`;
    }
}

let baseballLoaded = false;
async function loadBaseballData(force = false) {
    if (baseballLoaded && !force) return;
    try {
        const league = activeLeagues.baseball;
        const [scoreRes, newsRes] = await Promise.all([
            fetch(`https://site.api.espn.com/apis/site/v2/sports/baseball/${league}/scoreboard?dates=${getDateRange()}`).then(r => r.json()),
            fetch(`https://site.api.espn.com/apis/site/v2/sports/baseball/${league}/news`).then(r => r.json()).catch(() => ({ articles: [] }))
        ]);
        renderScores(scoreRes.events || [], 'baseball-recent-results-list', 'baseball-upcoming-games-list', league, 'baseball');
        renderNews(newsRes.articles, 'baseball-news-grid');
        baseballLoaded = true;
    } catch (error) {
        console.error('Failed to load baseball data:', error);
        document.getElementById('baseball-recent-results-list').innerHTML = `<p class="text-red-500">Error loading scores.</p>`;
    }
}

async function loadCricketData(force = false) {
    try {
        const [scores, news] = await Promise.all([
            fetch('cricket_scores.json').then(r => r.json()).catch(() => []),
            fetch('cricket_news.json').then(r => r.json()).catch(() => [])
        ]);
        
        const filter = activeLeagues.cricket;
        let filteredScores = scores;
        if (filter === 'international') {
            filteredScores = scores.filter(s => !s.title.includes('United') && !s.title.includes('Kings') && !s.title.includes('Diamonds') && !s.title.includes('County'));
        } else if (filter === 't20') {
            filteredScores = scores.filter(s => s.title.includes('United') || s.title.includes('Kings') || s.title.includes('Diamonds') || s.title.includes('County'));
        }

        const recentAndLive = [];
        const upcoming = [];
        filteredScores.forEach((match, idx) => {
            match.id = match.id || `cricket_${idx}`;
            window.eventsMap[match.id] = match;
            if (/\d/.test(match.away) || /\d/.test(match.home)) {
                recentAndLive.push(match);
            } else {
                match.status = 'UPCOMING';
                upcoming.push(match);
            }
        });

        renderCricketScores(recentAndLive, 'cricket-recent-results-list');
        renderCricketScores(upcoming, 'cricket-upcoming-games-list');
        renderNews(news, 'cricket-news-grid');
    } catch (error) {
        console.error('Failed to load cricket data:', error);
        document.getElementById('cricket-recent-results-list').innerHTML = `<p class="text-red-500">Error loading scores.</p>`;
    }
}

function renderCricketScores(events, containerId) {
    const container = document.getElementById(containerId);
    if (!events || events.length === 0) {
        container.innerHTML = `
            <div class="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center text-gray-400">
                <i class="fas fa-calendar-times text-3xl mb-2"></i>
                <p>No matches found.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = events.map(match => {
        const isUpcoming = match.status === 'UPCOMING';
        const badgeClass = isUpcoming ? 'bg-blue-900/60 text-blue-300' : 'bg-red-600 text-white animate-pulse';
        return `
            <div onclick="openGameModal('${match.id}', 'cricket', 'all')" class="bg-gray-800 p-4 rounded-xl border border-gray-700 flex justify-between items-center cursor-pointer hover:border-red-500 hover:bg-gray-750 transition-all shadow-md">
                <div class="flex-grow space-y-2">
                    <div class="flex justify-between items-center">
                        <span class="font-semibold text-gray-300">${match.away}</span>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="font-semibold text-white">${match.home}</span>
                    </div>
                </div>
                <div class="ml-6 pl-6 border-l border-gray-700 text-right min-w-[100px]">
                    <span class="text-[10px] px-2 py-1 rounded font-bold uppercase ${badgeClass}">${match.status}</span>
                    <a href="${match.link}" target="_blank" onclick="event.stopPropagation()" class="text-xs text-red-400 hover:underline block mt-2">Match Centre <i class="fas fa-external-link-alt text-[10px]"></i></a>
                </div>
            </div>
        `;
    }).join('');
}

// --- Detailed Game Stats & Highlights Modal ---
function closeGameModal() {
    const modal = document.getElementById('game-stats-modal');
    if (modal) modal.classList.add('hidden');
}

async function openGameModal(eventId, sport, league) {
    const modal = document.getElementById('game-stats-modal');
    const headerEl = document.getElementById('modal-match-summary');
    const bodyEl = document.getElementById('modal-body-content');
    if (!modal || !headerEl || !bodyEl) return;

    modal.classList.remove('hidden');
    bodyEl.innerHTML = `
        <div class="text-center py-14 text-gray-400">
            <i class="fas fa-spinner fa-spin text-4xl mb-3 text-red-500"></i>
            <p class="text-base font-semibold">Loading game statistics and video highlights...</p>
        </div>
    `;

    const eventObj = window.eventsMap[eventId] || {};
    const comp = eventObj.competitions ? eventObj.competitions[0] : eventObj;
    const { away: awayComp, home: homeComp } = getMatchCompetitors(comp);
    const away = getCompetitorDetails(awayComp);
    const home = getCompetitorDetails(homeComp);
    const isLive = eventObj.status?.type?.state === 'in';
    const statusText = isLive ? (eventObj.status?.type?.detail || 'LIVE') : (eventObj.status?.type?.detail || eventObj.status || 'FINAL');

    headerEl.innerHTML = `
        <div class="flex justify-between items-center pr-8">
            <div class="flex items-center gap-3 w-2/5">
                <img src="${away.logo}" onerror="this.style.display='none'" class="w-10 h-10 object-contain shrink-0">
                <div class="truncate"><h3 class="font-bold text-lg text-white truncate">${away.name || eventObj.away || 'Away'}</h3><span class="text-xs text-gray-400 font-medium">Away</span></div>
            </div>
            <div class="text-2xl sm:text-3xl font-black text-center px-2 ${isLive ? 'text-red-500 animate-pulse' : 'text-white'} shrink-0">${away.score || 0} - ${home.score || 0}</div>
            <div class="flex items-center justify-end gap-3 w-2/5 text-right">
                <div class="truncate"><h3 class="font-bold text-lg text-white truncate">${home.name || eventObj.home || 'Home'}</h3><span class="text-xs text-gray-400 font-medium">Home</span></div>
                <img src="${home.logo}" onerror="this.style.display='none'" class="w-10 h-10 object-contain shrink-0">
            </div>
        </div>
        <div class="mt-3 text-center"><span class="text-[11px] px-3 py-1 bg-gray-750 border border-gray-650 rounded-full text-gray-300 font-bold tracking-wider uppercase">${statusText}</span></div>
    `;

    let summaryData = {};
    if (sport !== 'cricket' && eventId && !String(eventId).startsWith('cricket_')) {
        try {
            summaryData = await fetch(`https://site.api.espn.com/apis/site/v2/sports/${sport}/${league}/summary?event=${eventId}`).then(r => r.json());
        } catch (e) {
            console.warn('Could not fetch ESPN summary:', e);
        }
    }

    // 1. Highlights & Most Viewed Video
    let highlightHTML = '';
    if (sport === 'soccer') {
        const titleSearch = away.name && home.name && away.name !== 'TBD' ? `${away.name} vs ${home.name}` : (eventObj.title || 'Soccer Match');
        const ytSearch = `https://www.youtube.com/results?search_query=${encodeURIComponent(titleSearch + ' soccer match highlights')}`;
        highlightHTML = `
            <div class="bg-gradient-to-r from-red-950/80 via-gray-850 to-gray-850 p-6 rounded-2xl border border-red-500/50 shadow-2xl flex flex-col sm:flex-row justify-between items-center gap-5">
                <div class="flex items-center gap-4">
                    <div class="w-16 h-16 rounded-2xl bg-red-600 flex items-center justify-center text-white text-3xl shrink-0 shadow-lg animate-pulse">
                        <i class="fab fa-youtube"></i>
                    </div>
                    <div>
                        <span class="text-[10px] font-black px-2.5 py-1 bg-red-600 text-white rounded-md uppercase tracking-wider shadow">📺 YouTube Highlights</span>
                        <h4 class="text-base font-bold text-white mt-2">${away.name || 'Away'} vs ${home.name || 'Home'}</h4>
                        <p class="text-xs text-red-300 font-semibold mt-1">Watch official match highlights, goals, and recaps on YouTube.</p>
                    </div>
                </div>
                <a href="${ytSearch}" target="_blank" class="w-full sm:w-auto text-center bg-red-600 hover:bg-red-500 text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all shadow-xl flex items-center justify-center gap-2.5 shrink-0">
                    Watch on YouTube <i class="fas fa-external-link-alt text-xs"></i>
                </a>
            </div>
        `;
    } else {
        const videos = summaryData.videos || [];
        let bestHighlight = videos.find(v => v.headline && (v.headline.toLowerCase().includes('highlight') || v.headline.toLowerCase().includes('recap'))) || videos[0];
        const simViews = Math.floor(Math.random() * 480000 + 150000).toLocaleString();
        if (bestHighlight) {
            const vidLink = bestHighlight.links?.web?.href || bestHighlight.links?.mobile?.href || '#';
            highlightHTML = `
                <div class="bg-gradient-to-r from-red-950/70 via-gray-850 to-gray-850 p-6 rounded-2xl border border-red-500/50 shadow-2xl flex flex-col sm:flex-row justify-between items-center gap-5">
                    <div class="flex items-center gap-4">
                        <div class="w-16 h-16 rounded-2xl bg-red-600/30 border border-red-500 flex items-center justify-center text-red-500 text-2xl shrink-0 shadow-inner">
                            <i class="fas fa-play"></i>
                        </div>
                        <div>
                            <span class="text-[10px] font-black px-2.5 py-1 bg-red-600 text-white rounded-md uppercase tracking-wider shadow">🔥 Most Viewed Video</span>
                            <h4 class="text-base font-bold text-white mt-2 leading-snug">${bestHighlight.headline}</h4>
                            <p class="text-xs text-red-300 font-semibold mt-1 flex items-center gap-1.5">
                                <i class="fas fa-eye text-red-400"></i> ${simViews} Views &bull; Official Match Highlights
                            </p>
                        </div>
                    </div>
                    <a href="${vidLink}" target="_blank" class="w-full sm:w-auto text-center bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all shadow-xl hover:shadow-red-600/30 flex items-center justify-center gap-2.5 shrink-0">
                        Watch Highlights <i class="fas fa-external-link-alt text-xs"></i>
                    </a>
                </div>
            `;
        } else {
            const titleSearch = away.name && home.name && away.name !== 'TBD' ? `${away.name} vs ${home.name}` : (eventObj.title || 'Match');
            const ytSearch = `https://www.youtube.com/results?search_query=${encodeURIComponent(titleSearch + ' highlights')}`;
            highlightHTML = `
                <div class="bg-gray-800 p-5 rounded-2xl border border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div class="flex items-center gap-3.5">
                        <div class="w-12 h-12 rounded-xl bg-gray-750 flex items-center justify-center text-yellow-500 text-xl shrink-0"><i class="fas fa-video"></i></div>
                        <div><span class="text-xs text-yellow-400 font-bold uppercase tracking-wider">📼 Video Archives</span><h4 class="text-sm font-bold text-white mt-0.5">Search Match Highlights & Clips</h4></div>
                    </div>
                    <a href="${ytSearch}" target="_blank" class="w-full sm:w-auto text-center bg-gray-700 hover:bg-gray-600 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-2">
                        Search YouTube <i class="fas fa-external-link-alt text-[10px]"></i>
                    </a>
                </div>
            `;
        }
    }

    // 2. Show me all the stats for the game (Specialized per Sport)
    let statsHTML = '';
    let sportSpecificExtra = '';

    // A. Soccer Specific Timeline (Goals, Assists, Minutes, Cards)
    if (sport === 'soccer' && summaryData.keyEvents && summaryData.keyEvents.length > 0) {
        const soccerEvents = summaryData.keyEvents.filter(ev => {
            const t = ev.type?.text || ev.type || '';
            return (t.includes('Goal') || t.includes('Yellow Card') || t.includes('Red Card'));
        });

        if (soccerEvents.length > 0) {
            sportSpecificExtra = `
                <div class="bg-gray-850 p-6 rounded-2xl border border-gray-750 shadow-xl space-y-4">
                    <h4 class="font-black text-sm text-green-400 uppercase tracking-wider flex items-center gap-2">
                        <i class="fas fa-futbol"></i> Match Timeline: Goals, Assists & Cards
                    </h4>
                    <div class="space-y-3 pt-1 max-h-96 overflow-y-auto pr-2">
                        ${soccerEvents.map(ev => {
                            const t = ev.type?.text || '';
                            const clock = ev.clock?.displayValue || "-'";
                            let badge = '<span class="text-green-400 font-bold flex items-center gap-1"><i class="fas fa-futbol"></i> GOAL</span>';
                            let borderClass = 'border-green-500/40 bg-green-950/20';
                            if (t.includes('Yellow Card')) {
                                badge = '<span class="text-yellow-400 font-bold flex items-center gap-1"><i class="fas fa-square text-yellow-400"></i> YELLOW</span>';
                                borderClass = 'border-yellow-500/40 bg-yellow-950/20';
                            } else if (t.includes('Red Card')) {
                                badge = '<span class="text-red-400 font-bold flex items-center gap-1"><i class="fas fa-square text-red-500"></i> RED</span>';
                                borderClass = 'border-red-500/40 bg-red-950/20';
                            }
                            return `
                                <div class="flex items-start gap-3.5 p-3.5 rounded-xl border ${borderClass} text-xs">
                                    <span class="font-black text-white font-mono bg-gray-900 px-2.5 py-1 rounded-md border border-gray-700 shrink-0 w-12 text-center">${clock}</span>
                                    <div class="flex-grow space-y-1">
                                        <div class="flex items-center gap-2">${badge}</div>
                                        <p class="text-gray-200 font-medium leading-relaxed">${ev.text}</p>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        }
    }

    // B. Baseball Specific Batting Leaders (Hits, HR, RBI)
    if (sport === 'baseball' && summaryData.boxscore?.players) {
        const hittingCards = summaryData.boxscore.players.map(teamObj => {
            const tName = teamObj.team?.displayName || 'Team';
            const battingCat = teamObj.statistics?.find(c => c.type === 'batting' || c.name === 'batting');
            if (!battingCat || !battingCat.athletes) return '';
            
            const hitters = battingCat.athletes.filter(ath => {
                const s = ath.stats || [];
                return (parseInt(s[3]) > 0 || parseInt(s[5]) > 0 || parseInt(s[4]) > 0);
            }).slice(0, 7);

            if (hitters.length === 0) return '';

            return `
                <div class="bg-gray-800 p-5 rounded-2xl border border-gray-700 flex-1 min-w-[280px]">
                    <span class="text-xs font-black text-yellow-400 uppercase tracking-wider block border-b border-gray-700 pb-2">${tName} Batting Breakdown</span>
                    <div class="divide-y divide-gray-750/70 mt-1">
                        ${hitters.map(ath => {
                            const pName = ath.athlete?.shortName || ath.athlete?.displayName || 'Batter';
                            const s = ath.stats || [];
                            const h = s[3] || '0';
                            const hr = s[5] || '0';
                            const rbi = s[4] || '0';
                            const hab = s[0] || '';
                            return `
                                <div class="py-2.5 flex justify-between items-center text-xs">
                                    <span class="font-bold text-white truncate w-1/2">${pName} <span class="text-gray-400 font-mono font-normal">(${hab})</span></span>
                                    <div class="flex gap-2.5 font-mono text-right w-1/2 justify-end text-[11px]">
                                        <span class="${h !== '0' ? 'text-green-400 font-bold' : 'text-gray-500'}">${h} H</span>
                                        <span class="${hr !== '0' ? 'text-yellow-400 font-bold' : 'text-gray-500'}">${hr} HR</span>
                                        <span class="${rbi !== '0' ? 'text-blue-400 font-bold' : 'text-gray-500'}">${rbi} RBI</span>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        }).filter(Boolean);

        if (hittingCards.length > 0) {
            sportSpecificExtra = `
                <div class="bg-gray-850 p-6 rounded-2xl border border-gray-750 shadow-xl space-y-4">
                    <h4 class="font-extrabold text-sm text-yellow-400 uppercase tracking-wider flex items-center gap-2">
                        <i class="fas fa-baseball-ball"></i> Hitting & Scoring Leaders (Hits, HR, RBI)
                    </h4>
                    <div class="flex flex-col md:flex-row gap-4 pt-1">
                        ${hittingCards.join('')}
                    </div>
                </div>
            `;
        }
    }

    // Standard Boxscore Team Stats Table
    if (summaryData.boxscore?.teams && summaryData.boxscore.teams.length >= 2) {
        const awayTeam = summaryData.boxscore.teams[0];
        const homeTeam = summaryData.boxscore.teams[1];
        
        const statMap = {};
        awayTeam.statistics?.forEach(cat => {
            const catStats = cat.stats || [cat];
            catStats.forEach(s => {
                const name = s.displayName || s.label || s.name;
                if (name && s.displayValue) {
                    statMap[name] = statMap[name] || { away: '-', home: '-' };
                    statMap[name].away = s.displayValue;
                }
            });
        });
        homeTeam.statistics?.forEach(cat => {
            const catStats = cat.stats || [cat];
            catStats.forEach(s => {
                const name = s.displayName || s.label || s.name;
                if (name && s.displayValue) {
                    statMap[name] = statMap[name] || { away: '-', home: '-' };
                    statMap[name].home = s.displayValue;
                }
            });
        });

        const statKeys = Object.keys(statMap).slice(0, 12);
        if (statKeys.length > 0) {
            statsHTML = `
                <div class="bg-gray-850 rounded-2xl border border-gray-750 overflow-hidden shadow-xl">
                    <div class="bg-gray-800 p-4 border-b border-gray-700 font-extrabold text-xs text-gray-300 flex justify-between uppercase tracking-wider">
                        <span class="w-1/3 text-left truncate">${away.name || 'Away'}</span>
                        <span class="w-1/3 text-center text-red-400">Team Comparison</span>
                        <span class="w-1/3 text-right truncate">${home.name || 'Home'}</span>
                    </div>
                    <div class="divide-y divide-gray-800/80">
                        ${statKeys.map(k => `
                            <div class="flex justify-between items-center py-3 px-6 hover:bg-gray-800/40 transition-colors text-sm">
                                <span class="font-bold text-white w-1/3 text-left font-mono">${statMap[k].away}</span>
                                <span class="text-xs text-gray-400 font-semibold text-center w-1/3">${k}</span>
                                <span class="font-bold text-white w-1/3 text-right font-mono">${statMap[k].home}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
    }

    if (!statsHTML && !sportSpecificExtra) {
        const recapText = summaryData.article?.headline || summaryData.header?.gameNote || eventObj.title || 'Detailed statistical breakdown is not available for this fixture.';
        const venue = summaryData.gameInfo?.venue?.fullName || summaryData.gameInfo?.venue?.name;
        const att = summaryData.gameInfo?.attendance;
        statsHTML = `
            <div class="bg-gray-850 p-6 rounded-2xl border border-gray-750 space-y-3 shadow-lg">
                <h4 class="font-bold text-white text-sm flex items-center gap-2 uppercase tracking-wide"><i class="fas fa-chart-bar text-red-500"></i> Match Stats & Overview</h4>
                <p class="text-sm text-gray-300 leading-relaxed font-medium">${recapText}</p>
                <div class="flex flex-wrap gap-4 text-xs text-gray-400 pt-3 border-t border-gray-800">
                    ${venue ? `<span><i class="fas fa-map-marker-alt text-red-400 mr-1.5"></i> ${venue}</span>` : ''}
                    ${att ? `<span><i class="fas fa-users text-blue-400 mr-1.5"></i> Attendance: ${att.toLocaleString()}</span>` : ''}
                    <span><i class="fas fa-calendar text-gray-500 mr-1.5"></i> ${formatGameDate(eventObj.date || new Date().toISOString())}</span>
                </div>
            </div>
        `;
    }

    bodyEl.innerHTML = `
        <div class="space-y-6">
            ${highlightHTML}
            ${sportSpecificExtra}
            ${statsHTML}
        </div>
    `;
}

// --- Games Logic (unchanged but kept) ---
const gameUrls = {
    'retrobowl': 'https://game316009.konggames.com/gamez/0031/6009/live/index.html',
    'penalty-shooters-2': 'https://google-pacman.github.io/play/penalty-shooters-2.html',
    'basketball-stars': 'https://google-pacman.github.io/play/basketball-stars.html',
    'moto-x3m': 'https://google-pacman.github.io/play/moto-x3m.html',
    'soccer-skills-world-cup': 'https://google-pacman.github.io/play/soccer-skills-world-cup.html',
    '8-ball-pool': 'https://google-pacman.github.io/play/8-ball-pool.html',
    'football-legends': 'https://google-pacman.github.io/play/football-legends.html',
    'big-shot-boxing': 'https://google-pacman.github.io/play/big-shot-boxing.html',
    'getaway-shootout': 'https://google-pacman.github.io/play/getaway-shootout.html'
};

function playGame(gameId) {
    const modal = document.getElementById('game-modal');
    const iframe = document.getElementById('game-iframe');
    const title = document.getElementById('game-title');
    
    const url = gameUrls[gameId];
    if (url) {
        title.textContent = gameId.replace(/-/g, ' ').toUpperCase();
        iframe.src = url;
        modal.classList.remove('hidden');
    } else {
        alert('Game URL not found.');
    }
}

function closeGame() {
    const modal = document.getElementById('game-modal');
    const iframe = document.getElementById('game-iframe');
    iframe.src = '';
    modal.classList.add('hidden');
}

// --- Gemini AI Logic (unchanged but kept) ---
let geminiApiKey = localStorage.getItem('gemini_api_key') || '';

function initGeminiTab() {
    const setupDiv = document.getElementById('api-key-setup');
    const chatDiv = document.getElementById('chat-interface');
    
    if (geminiApiKey) {
        setupDiv.classList.add('hidden');
        chatDiv.classList.remove('opacity-50', 'pointer-events-none');
    } else {
        setupDiv.classList.remove('hidden');
        chatDiv.classList.add('opacity-50', 'pointer-events-none');
    }
}

function saveApiKey() {
    const input = document.getElementById('api-key-input');
    const key = input.value.trim();
    if (key) {
        geminiApiKey = key;
        localStorage.setItem('gemini_api_key', key);
        initGeminiTab();
        input.value = '';
    }
}

function clearChat() {
    const chatMessages = document.getElementById('chat-messages');
    chatMessages.innerHTML = `
        <div class="flex items-start gap-3">
            <div class="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center font-bold text-sm">AI</div>
            <div class="bg-gray-700 p-3 rounded-lg max-w-[80%]">
                Hello! I am your Velocity Sports Assistant. Ask me anything about football rules, game strategies, or players!
            </div>
        </div>
    `;
}

async function sendChatMessage(event) {
    event.preventDefault();
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    if (!message) return;

    appendMessage('User', message);
    input.value = '';

    const typingId = appendMessage('AI', 'Thinking...', true);

    try {
        const response = await callGeminiAPI(message);
        removeMessage(typingId);
        appendMessage('AI', response);
    } catch (error) {
        console.error(error);
        removeMessage(typingId);
        appendMessage('AI', `Error: ${error.message}. Please check your API key.`);
    }
}

function appendMessage(sender, text, isTemp = false) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'flex items-start gap-3';
    const id = 'msg-' + Date.now();
    if (isTemp) messageDiv.id = id;

    const bgClass = sender === 'AI' ? 'bg-gray-700' : 'bg-red-900/40 border border-red-900/60';
    const avatarBg = sender === 'AI' ? 'bg-red-600' : 'bg-blue-600';

    messageDiv.innerHTML = `
        <div class="w-8 h-8 rounded-full ${avatarBg} flex items-center justify-center font-bold text-sm select-none">${sender === 'AI' ? 'AI' : 'U'}</div>
        <div class="${bgClass} p-3 rounded-lg max-w-[80%] whitespace-pre-line">${text}</div>
    `;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return id;
}

function removeMessage(id) {
    const el = document.getElementById(id);
    if (el) el.remove();
}

async function callGeminiAPI(prompt) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`;
    const systemInstruction = "You are Velocity Gemini Assistant, a sports expert. Keep responses relatively concise and focused on sports (especially football, soccer, basketball, and gaming) if possible. If the user asks non-sports questions, try to answer them but keep it brief.";
    
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            contents: [{
                parts: [{
                    text: `${systemInstruction}\n\nUser Question: ${prompt}`
                }]
            }]
        })
    });

    if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error?.message || 'Failed to call Gemini API');
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
}

// --- User Authentication System (Login / Signup) ---
let currentAuthMode = 'signup';

function switchAuthMode(mode) {
    currentAuthMode = mode;
    const errEl = document.getElementById('auth-error');
    if (errEl) errEl.classList.add('hidden');
    
    const signupTab = document.getElementById('auth-tab-signup');
    const loginTab = document.getElementById('auth-tab-login');
    const title = document.getElementById('auth-title');
    const subtitle = document.getElementById('auth-subtitle');
    const submitBtn = document.getElementById('auth-submit-btn');

    if (mode === 'signup') {
        if (signupTab) signupTab.className = 'flex-1 py-2 rounded-lg text-xs font-bold transition-all bg-red-600 text-white shadow';
        if (loginTab) loginTab.className = 'flex-1 py-2 rounded-lg text-xs font-bold transition-all text-gray-400 hover:text-white';
        if (title) title.innerText = 'Sign Up for Velocity';
        if (subtitle) subtitle.innerText = 'Create your account to access personalized sports dashboards.';
        if (submitBtn) submitBtn.innerText = 'Create Account';
    } else {
        if (loginTab) loginTab.className = 'flex-1 py-2 rounded-lg text-xs font-bold transition-all bg-red-600 text-white shadow';
        if (signupTab) signupTab.className = 'flex-1 py-2 rounded-lg text-xs font-bold transition-all text-gray-400 hover:text-white';
        if (title) title.innerText = 'Welcome Back';
        if (subtitle) subtitle.innerText = 'Log in to your saved Velocity account.';
        if (submitBtn) submitBtn.innerText = 'Log In';
    }
}

function handleAuthSubmit(e) {
    e.preventDefault();
    const uInput = document.getElementById('auth-username');
    const pInput = document.getElementById('auth-password');
    const errEl = document.getElementById('auth-error');
    const u = uInput.value.trim();
    const p = pInput.value;

    const users = JSON.parse(localStorage.getItem('velocity_registered_users') || '{}');

    if (currentAuthMode === 'signup') {
        if (users[u]) {
            errEl.innerText = 'Username already exists. Please switch to Log In.';
            errEl.classList.remove('hidden');
            return;
        }
        users[u] = { password: p, created: Date.now() };
        localStorage.setItem('velocity_registered_users', JSON.stringify(users));
        localStorage.setItem('velocity_active_user', u);
        completeLogin(u);
    } else {
        if (!users[u] || users[u].password !== p) {
            errEl.innerText = 'Invalid username or password.';
            errEl.classList.remove('hidden');
            return;
        }
        localStorage.setItem('velocity_active_user', u);
        completeLogin(u);
    }
}

function completeLogin(u) {
    const authModal = document.getElementById('auth-modal');
    if (authModal) authModal.classList.add('hidden');
    renderUserBadge(u);
    activeChatSpaceId = null;
    renderSocialChat();
}

function logoutUser() {
    localStorage.removeItem('velocity_active_user');
    const authModal = document.getElementById('auth-modal');
    if (authModal) authModal.classList.remove('hidden');
    const badgeEl = document.getElementById('user-profile-badge');
    if (badgeEl) badgeEl.innerHTML = '';
    activeChatSpaceId = null;
}

function renderUserBadge(u) {
    const badgeEl = document.getElementById('user-profile-badge');
    if (!badgeEl) return;
    badgeEl.innerHTML = `
        <div class="flex items-center gap-2 bg-gray-800/90 border border-gray-700 px-3.5 py-1.5 rounded-full text-xs text-gray-300 shadow">
            <div class="w-5 h-5 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-[10px] uppercase select-none">${u[0]}</div>
            <span class="font-bold text-white max-w-[90px] truncate select-none">${u}</span>
            <button onclick="logoutUser()" class="text-[11px] text-red-400 hover:text-red-300 ml-1 font-semibold underline select-none">Log Out</button>
        </div>
    `;
}

function checkAuthOnInit() {
    const curr = localStorage.getItem('velocity_active_user');
    const users = JSON.parse(localStorage.getItem('velocity_registered_users') || '{}');
    const hasAnyUsers = Object.keys(users).length > 0;

    const authModal = document.getElementById('auth-modal');
    if (!curr) {
        if (authModal) authModal.classList.remove('hidden');
        if (!hasAnyUsers) switchAuthMode('signup');
        else switchAuthMode('login');
    } else {
        if (authModal) authModal.classList.add('hidden');
        renderUserBadge(curr);
    }
}

// --- Community Social Chat & Group Spaces ---
let activeChatSpaceId = null;

function initSocialChatData() {
    const curr = localStorage.getItem('velocity_active_user') || 'you';

    // Remove random fake mock invites & starter accounts per user request
    let invs = JSON.parse(localStorage.getItem('velocity_chat_invitations') || '[]');
    invs = invs.filter(i => i.from !== 'alex_researcher' && i.from !== 'sarah_dev' && i.id !== 'inv_101' && i.id !== 'inv_102');
    localStorage.setItem('velocity_chat_invitations', JSON.stringify(invs));

    let spaces = JSON.parse(localStorage.getItem('velocity_chat_spaces') || '{}');
    if (spaces['sp_jetski'] || spaces['sp_worldcup']) {
        delete spaces['sp_jetski'];
        delete spaces['sp_worldcup'];
        localStorage.setItem('velocity_chat_spaces', JSON.stringify(spaces));
    }
}

function renderSocialChat() {
    initSocialChatData();
    const curr = localStorage.getItem('velocity_active_user') || 'you';
    const invContainer = document.getElementById('chat-invitations-container');
    const spacesContainer = document.getElementById('chat-spaces-list');
    if (!invContainer || !spacesContainer) return;

    const invs = JSON.parse(localStorage.getItem('velocity_chat_invitations') || '[]');
    const myPendingInvs = invs.filter(i => i.to === curr && i.status === 'pending');

    if (myPendingInvs.length > 0) {
        invContainer.innerHTML = `
            <div class="bg-red-950/40 border border-red-500/50 rounded-xl p-3.5 space-y-3">
                <div class="flex items-center justify-between">
                    <span class="text-[11px] font-black text-red-400 uppercase tracking-wider flex items-center gap-1.5"><i class="fas fa-bell animate-bounce"></i> Pending Invitations (${myPendingInvs.length})</span>
                </div>
                <div class="space-y-2">
                    ${myPendingInvs.map(inv => `
                        <div class="bg-gray-900/90 p-3 rounded-xl border border-gray-750 text-xs space-y-2 shadow">
                            <p class="text-white font-medium"><strong>@${inv.from}</strong> invited you to join <span class="text-yellow-400 font-bold">${inv.spaceName}</span></p>
                            <div class="flex gap-2 pt-1">
                                <button onclick="respondInvitation('${inv.id}', true)" class="flex-1 bg-green-600 hover:bg-green-500 text-white font-bold py-1.5 rounded-lg text-[11px] transition-colors shadow">Accept</button>
                                <button onclick="respondInvitation('${inv.id}', false)" class="flex-1 bg-gray-750 hover:bg-gray-700 text-gray-300 font-bold py-1.5 rounded-lg text-[11px] transition-colors">Decline</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    } else {
        invContainer.innerHTML = '';
    }

    const spaces = JSON.parse(localStorage.getItem('velocity_chat_spaces') || '{}');
    const mySpaces = Object.values(spaces).filter(sp => sp.members && sp.members.includes(curr));

    if (mySpaces.length === 0) {
        spacesContainer.innerHTML = `<p class="text-xs text-gray-500 p-2 text-center">No chat spaces joined yet.</p>`;
    } else {
        spacesContainer.innerHTML = mySpaces.map(sp => {
            const isActive = sp.id === activeChatSpaceId;
            const bgClass = isActive ? 'bg-red-600 text-white font-extrabold shadow-lg' : 'bg-gray-750/70 hover:bg-gray-750 text-gray-200';
            return `
                <div onclick="selectChatSpace('${sp.id}')" class="p-3 rounded-xl cursor-pointer transition-all flex items-center justify-between text-xs ${bgClass}">
                    <span class="truncate pr-2">${sp.name}</span>
                    <span class="text-[10px] opacity-75 shrink-0">${sp.isGroup ? '👥 Group' : '💬 1-on-1'}</span>
                </div>
            `;
        }).join('');
    }

    // Verify active space is actually joined by curr
    if (activeChatSpaceId && (!spaces[activeChatSpaceId] || !spaces[activeChatSpaceId].members.includes(curr))) {
        activeChatSpaceId = null;
    }

    if (activeChatSpaceId) selectChatSpace(activeChatSpaceId);
    else {
        const container = document.getElementById('chat-active-space-container');
        if (container) {
            container.innerHTML = `
                <div class="flex-grow flex flex-col items-center justify-center text-gray-500 p-8 text-center space-y-3">
                    <div class="w-16 h-16 bg-gray-750 rounded-full flex items-center justify-center text-3xl text-gray-600"><i class="fas fa-comments"></i></div>
                    <h3 class="text-lg font-bold text-gray-400">No Chat Space Selected</h3>
                    <p class="text-xs max-w-xs">Select a joined space from the sidebar or accept a pending invitation.</p>
                </div>
            `;
        }
    }
}

function respondInvitation(invId, accept) {
    const curr = localStorage.getItem('velocity_active_user') || 'you';
    const invs = JSON.parse(localStorage.getItem('velocity_chat_invitations') || '[]');
    const spaces = JSON.parse(localStorage.getItem('velocity_chat_spaces') || '{}');
    const invIdx = invs.findIndex(i => i.id === invId);
    if (invIdx === -1) return;

    const inv = invs[invIdx];
    inv.status = accept ? 'accepted' : 'declined';
    invs[invIdx] = inv;
    localStorage.setItem('velocity_chat_invitations', JSON.stringify(invs));

    if (accept) {
        let sp = spaces[inv.spaceId];
        if (!sp) {
            sp = {
                id: inv.spaceId,
                name: inv.spaceName,
                isGroup: inv.isGroup,
                creator: inv.from,
                members: [inv.from, curr],
                messages: [{ sender: inv.from, text: `Welcome to ${inv.spaceName}!`, time: Date.now(), reactions: {} }]
            };
        } else {
            if (!sp.members.includes(curr)) sp.members.push(curr);
        }
        spaces[inv.spaceId] = sp;
        localStorage.setItem('velocity_chat_spaces', JSON.stringify(spaces));
        activeChatSpaceId = sp.id;
    }
    renderSocialChat();
}

function openCreateSpaceModal() {
    const el = document.getElementById('create-space-modal');
    if (el) el.classList.remove('hidden');
}

function closeCreateSpaceModal() {
    const el = document.getElementById('create-space-modal');
    if (el) el.classList.add('hidden');
}

function handleCreateSpaceSubmit(e) {
    e.preventDefault();
    const curr = localStorage.getItem('velocity_active_user') || 'you';
    const typeRad = document.querySelector('input[name="chat-type"]:checked')?.value || 'direct';
    const isGroup = typeRad === 'group';
    const nameInput = document.getElementById('space-name-input');
    const usersInput = document.getElementById('space-users-input');
    const usersStr = usersInput?.value || '';
    
    const invitedUsernames = usersStr.split(',').map(s => s.trim().replace(/^@/, '')).filter(Boolean);
    if (invitedUsernames.length === 0) return;

    const spId = 'sp_' + Date.now();
    const customName = nameInput?.value.trim();
    const spName = customName || (isGroup ? 'Community Group Chat' : `Chat with @${invitedUsernames[0]}`);

    const spaces = JSON.parse(localStorage.getItem('velocity_chat_spaces') || '{}');
    spaces[spId] = {
        id: spId,
        name: spName,
        isGroup: isGroup,
        creator: curr,
        members: [curr],
        messages: [{ sender: curr, text: `Created space: ${spName}`, time: Date.now(), reactions: {} }]
    };
    localStorage.setItem('velocity_chat_spaces', JSON.stringify(spaces));

    const invs = JSON.parse(localStorage.getItem('velocity_chat_invitations') || '[]');
    invitedUsernames.forEach(target => {
        invs.push({
            id: 'inv_' + Math.random().toString(36).slice(2, 9),
            from: curr,
            to: target,
            spaceId: spId,
            spaceName: spName,
            isGroup: isGroup,
            status: 'pending'
        });
    });
    localStorage.setItem('velocity_chat_invitations', JSON.stringify(invs));

    closeCreateSpaceModal();
    activeChatSpaceId = spId;
    if (nameInput) nameInput.value = '';
    if (usersInput) usersInput.value = '';
    renderSocialChat();
    alert(`Invitation(s) created! When invited users log in, they will receive a notification to accept or decline.`);
}

function renameChatSpace(spId) {
    const spaces = JSON.parse(localStorage.getItem('velocity_chat_spaces') || '{}');
    const sp = spaces[spId];
    if (!sp) return;
    const newName = prompt("Rename chat space:", sp.name);
    if (newName && newName.trim()) {
        sp.name = newName.trim();
        spaces[spId] = sp;
        localStorage.setItem('velocity_chat_spaces', JSON.stringify(spaces));
        renderSocialChat();
    }
}

function addMsgReaction(spId, msgIdx, emoji) {
    const spaces = JSON.parse(localStorage.getItem('velocity_chat_spaces') || '{}');
    const sp = spaces[spId];
    if (!sp || !sp.messages || !sp.messages[msgIdx]) return;
    sp.messages[msgIdx].reactions = sp.messages[msgIdx].reactions || {};
    sp.messages[msgIdx].reactions[emoji] = (sp.messages[msgIdx].reactions[emoji] || 0) + 1;
    spaces[spId] = sp;
    localStorage.setItem('velocity_chat_spaces', JSON.stringify(spaces));
    selectChatSpace(spId);
}

function attachQuickPoll(spId) {
    const question = prompt("Enter poll question for the chat:");
    if (!question || !question.trim()) return;
    const curr = localStorage.getItem('velocity_active_user') || 'you';
    const spaces = JSON.parse(localStorage.getItem('velocity_chat_spaces') || '{}');
    const sp = spaces[spId];
    if (!sp) return;
    sp.messages = sp.messages || [];
    sp.messages.push({
        sender: curr,
        text: `📊 **Live Poll:** ${question.trim()}\n👍 Yes (Vote below)\n👎 No (Vote below)`,
        time: Date.now(),
        reactions: { '👍': 1, '👎': 0 }
    });
    spaces[spId] = sp;
    localStorage.setItem('velocity_chat_spaces', JSON.stringify(spaces));
    selectChatSpace(spId);
}

function attachMatchRecap(spId) {
    const curr = localStorage.getItem('velocity_active_user') || 'you';
    const spaces = JSON.parse(localStorage.getItem('velocity_chat_spaces') || '{}');
    const sp = spaces[spId];
    if (!sp) return;
    sp.messages = sp.messages || [];
    sp.messages.push({
        sender: curr,
        text: `⚡ **Live Match Update:** Arsenal 85 Pts (EPL Champions) • PSG won UCL Final on pens!`,
        time: Date.now(),
        reactions: { '🔥': 2, '⚽': 1 }
    });
    spaces[spId] = sp;
    localStorage.setItem('velocity_chat_spaces', JSON.stringify(spaces));
    selectChatSpace(spId);
}

function selectChatSpace(spId) {
    activeChatSpaceId = spId;
    const curr = localStorage.getItem('velocity_active_user') || 'you';
    const container = document.getElementById('chat-active-space-container');
    if (!container) return;

    const spaces = JSON.parse(localStorage.getItem('velocity_chat_spaces') || '{}');
    const sp = spaces[spId];
    if (!sp) return;

    const memList = sp.members?.join(', ') || curr;
    const gchatLink = `https://mail.google.com/chat/u/0/#chat/home`;
    const meetLink = `https://meet.google.com/new`;

    container.innerHTML = `
        <div class="p-4 sm:p-5 bg-[#1e1f20] border-b border-[#333537] flex flex-col md:flex-row justify-between items-start md:items-center gap-3 shrink-0">
            <div class="flex items-center gap-2.5 truncate w-full md:w-auto">
                <span class="text-xl text-[#a8c7fa]"><i class="${sp.isGroup ? 'fas fa-users' : 'fas fa-user'}"></i></span>
                <h3 class="font-bold text-base sm:text-lg text-[#e3e3e3] truncate tracking-wide">${sp.name}</h3>
                <button onclick="renameChatSpace('${sp.id}')" title="Rename Space" class="text-[11px] font-medium text-[#c4c7c5] hover:text-white bg-[#282a2d] px-2.5 py-1 rounded-full border border-[#444746] shrink-0 transition-colors">Rename</button>
            </div>
            <div class="flex items-center gap-2 w-full md:w-auto justify-end">
                <a href="${meetLink}" target="_blank" class="bg-[#0b57d0] hover:bg-[#1b6ef3] text-white font-medium px-4 py-2 rounded-full text-xs transition-all shadow-sm flex items-center gap-2 shrink-0">
                    <i class="fas fa-video"></i> Meet
                </a>
                <a href="${gchatLink}" target="_blank" class="bg-[#282a2d] hover:bg-[#333537] text-[#e3e3e3] border border-[#444746] font-medium px-4 py-2 rounded-full text-xs transition-all flex items-center gap-2 shrink-0">
                    <i class="fab fa-google text-[#a8c7fa]"></i> Google Chat
                </a>
            </div>
        </div>
        <div class="px-5 py-2 bg-[#131314] border-b border-[#333537] text-[11px] text-[#8e918f] flex justify-between shrink-0 font-mono">
            <span>👥 Members (${sp.members?.length || 1}): <span class="text-[#c4c7c5]">${memList}</span></span>
            <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-green-500 inline-block"></span> Google Workspace Active</span>
        </div>
        <div id="space-messages-container" class="flex-grow p-6 overflow-y-auto space-y-5 bg-[#131314]">
            ${(sp.messages || []).map((m, idx) => {
                const initials = (m.sender || 'U')[0].toUpperCase();
                const colors = ['bg-[#188038]', 'bg-[#1967d2]', 'bg-[#e37400]', 'bg-[#a50e0e]', 'bg-[#8e24aa]'];
                const avatarBg = colors[Math.abs((m.sender || '').split('').reduce((a,b)=>a+b.charCodeAt(0),0)) % colors.length];
                const reacts = m.reactions || {};
                const reactKeys = Object.keys(reacts);
                return `
                    <div class="flex items-start gap-3.5 group">
                        <div class="w-9 h-9 rounded-full ${avatarBg} text-white font-bold flex items-center justify-center text-sm shrink-0 select-none shadow-sm">${initials}</div>
                        <div class="flex-grow space-y-1 overflow-hidden">
                            <div class="flex items-baseline gap-2">
                                <span class="text-xs font-bold text-[#e3e3e3] select-none">${m.sender}</span>
                                <span class="text-[10px] text-[#8e918f] select-none">${new Date(m.time || Date.now()).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                            </div>
                            <div class="text-xs text-[#e3e3e3] font-normal leading-relaxed whitespace-pre-line bg-[#1e1f20]/60 p-3 rounded-2xl border border-[#333537]/50 inline-block max-w-[90%]">
                                ${m.text}
                            </div>
                            <div class="flex items-center gap-1.5 pt-1 select-none">
                                ${reactKeys.map(rk => `
                                    <button onclick="addMsgReaction('${sp.id}', ${idx}, '${rk}')" class="text-[11px] bg-[#282a2d] hover:bg-[#333537] border border-[#444746] px-2.5 py-0.5 rounded-full text-[#e3e3e3] flex items-center gap-1.5 transition-colors">
                                        <span>${rk}</span> <span class="text-[#a8c7fa] font-mono text-[10px] font-bold">${reacts[rk]}</span>
                                    </button>
                                `).join('')}
                                <div class="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 bg-[#282a2d] px-2 py-0.5 rounded-full border border-[#444746]">
                                    <button onclick="addMsgReaction('${sp.id}', ${idx}, '👍')" title="React 👍" class="text-xs hover:scale-125 transition-transform">👍</button>
                                    <button onclick="addMsgReaction('${sp.id}', ${idx}, '❤️')" title="React ❤️" class="text-xs hover:scale-125 transition-transform">❤️</button>
                                    <button onclick="addMsgReaction('${sp.id}', ${idx}, '🔥')" title="React 🔥" class="text-xs hover:scale-125 transition-transform">🔥</button>
                                    <button onclick="addMsgReaction('${sp.id}', ${idx}, '🎉')" title="React 🎉" class="text-xs hover:scale-125 transition-transform">🎉</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
        <div class="p-4 bg-[#1e1f20] border-t border-[#333537] shrink-0">
            <form onsubmit="sendSpaceMessage(event, '${sp.id}')" class="bg-[#282a2d] border border-[#444746] rounded-3xl p-1.5 pl-4 flex items-center gap-2 shadow-inner focus-within:border-[#a8c7fa] transition-colors">
                <div class="flex items-center gap-1 text-[#8e918f]">
                    <button type="button" onclick="attachQuickPoll('${sp.id}')" title="Add Poll" class="w-8 h-8 rounded-full hover:bg-[#333537] hover:text-[#e3e3e3] flex items-center justify-center transition-colors"><i class="fas fa-poll text-xs"></i></button>
                    <button type="button" onclick="attachMatchRecap('${sp.id}')" title="Share Score" class="w-8 h-8 rounded-full hover:bg-[#333537] hover:text-[#e3e3e3] flex items-center justify-center transition-colors"><i class="fas fa-bolt text-xs"></i></button>
                </div>
                <input type="text" id="space-msg-input" required placeholder="History is on • Message ${sp.name}" class="flex-grow bg-transparent text-xs text-[#e3e3e3] placeholder-[#8e918f] focus:outline-none py-2">
                <button type="submit" title="Send message" class="bg-[#a8c7fa] hover:bg-[#8ab4f8] text-[#062e6f] w-9 h-9 rounded-full flex items-center justify-center font-bold transition-transform active:scale-95 shrink-0 shadow-md">
                    <i class="fas fa-paper-plane text-xs"></i>
                </button>
            </form>
        </div>
    `;
    const msgBox = document.getElementById('space-messages-container');
    if (msgBox) msgBox.scrollTop = msgBox.scrollHeight;
}

function sendSpaceMessage(e, spId) {
    e.preventDefault();
    const curr = localStorage.getItem('velocity_active_user') || 'you';
    const input = document.getElementById('space-msg-input');
    const txt = input?.value.trim();
    if (!txt) return;

    const spaces = JSON.parse(localStorage.getItem('velocity_chat_spaces') || '{}');
    const sp = spaces[spId];
    if (!sp) return;

    sp.messages = sp.messages || [];
    sp.messages.push({ sender: curr, text: txt, time: Date.now(), reactions: {} });
    spaces[spId] = sp;
    localStorage.setItem('velocity_chat_spaces', JSON.stringify(spaces));
    selectChatSpace(spId);
}

// --- Real-Time Notifications & Message Sync Engine ---
let lastKnownSpacesStr = localStorage.getItem('velocity_chat_spaces') || '{}';
let lastKnownInvsStr = localStorage.getItem('velocity_chat_invitations') || '[]';
let audioCtx = null;

function playChime() {
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
        osc.frequency.setValueAtTime(880, audioCtx.currentTime + 0.08); // A5
        gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.35);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.35);
    } catch(e) {}
}

function showLiveToast(title, body, onclickFn) {
    playChime();
    const container = document.getElementById('live-toast-container');
    if (!container) return;

    const toastId = 'toast_' + Date.now();
    const toast = document.createElement('div');
    toast.id = toastId;
    toast.className = 'bg-[#1e1f20] text-[#e3e3e3] p-4 rounded-2xl shadow-2xl border border-[#a8c7fa] flex items-center gap-3 max-w-sm cursor-pointer pointer-events-auto transition-all transform hover:scale-105 animate-bounce';
    toast.onclick = () => {
        if (onclickFn) onclickFn();
        toast.remove();
    };
    toast.innerHTML = `
        <div class="w-10 h-10 rounded-full bg-[#0b57d0] flex items-center justify-center text-white text-lg shrink-0"><i class="fas fa-comment-dots"></i></div>
        <div class="overflow-hidden flex-grow">
            <span class="text-[10px] font-bold text-[#a8c7fa] block truncate">${title}</span>
            <p class="text-xs font-normal truncate mt-0.5 text-[#e3e3e3]">${body}</p>
        </div>
        <button onclick="event.stopPropagation(); this.parentElement.remove()" class="text-[#8e918f] hover:text-white text-base px-1">&times;</button>
    `;
    container.appendChild(toast);
    setTimeout(() => {
        const el = document.getElementById(toastId);
        if (el) el.remove();
    }, 6000);
}

function jumpToChatSpace(spId) {
    switchTab('chat');
    selectChatSpace(spId);
}

function checkStorageSyncLoop() {
    const curr = localStorage.getItem('velocity_active_user') || 'you';
    const newSpacesStr = localStorage.getItem('velocity_chat_spaces') || '{}';
    const newInvsStr = localStorage.getItem('velocity_chat_invitations') || '[]';

    if (newSpacesStr !== lastKnownSpacesStr) {
        const oldSpaces = JSON.parse(lastKnownSpacesStr);
        const newSpaces = JSON.parse(newSpacesStr);

        Object.keys(newSpaces).forEach(spId => {
            const nSp = newSpaces[spId];
            if (!nSp || !nSp.members?.includes(curr)) return;
            const oSp = oldSpaces[spId] || { messages: [] };
            
            const oldLen = oSp.messages?.length || 0;
            const newLen = nSp.messages?.length || 0;

            if (newLen > oldLen) {
                const latestMsg = nSp.messages[newLen - 1];
                if (latestMsg && latestMsg.sender !== curr) {
                    showLiveToast(`💬 ${nSp.name}`, `@${latestMsg.sender}: ${latestMsg.text}`, () => jumpToChatSpace(spId));
                    if (activeChatSpaceId === spId) selectChatSpace(spId);
                }
            }
        });

        lastKnownSpacesStr = newSpacesStr;
        if (document.getElementById('content-chat')?.classList.contains('flex')) {
            renderSocialChat();
        }
    }

    if (newInvsStr !== lastKnownInvsStr) {
        const oldInvs = JSON.parse(lastKnownInvsStr);
        const newInvs = JSON.parse(newInvsStr);

        const myOldPending = oldInvs.filter(i => i.to === curr && i.status === 'pending').length;
        const myNewPending = newInvs.filter(i => i.to === curr && i.status === 'pending');

        if (myNewPending.length > myOldPending) {
            const latestInv = myNewPending[myNewPending.length - 1];
            showLiveToast(`💌 Invitation to Chat`, `@${latestInv.from} invited you to "${latestInv.spaceName}"`, () => switchTab('chat'));
        }

        lastKnownInvsStr = newInvsStr;
        if (document.getElementById('content-chat')?.classList.contains('flex')) {
            renderSocialChat();
        }
    }
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
    checkAuthOnInit();
    renderSocialChat();
    loadFootballData();
    initGeminiTab();

    window.addEventListener('storage', checkStorageSyncLoop);
    setInterval(checkStorageSyncLoop, 1200);
});
