// Benchmark Keynote — team brief data
// VO timings measured off BENCHMARK-KEYNOTE-HANDOFF.mp4 (2:51.8).
// Paul's notes transcribed from his three review videos (Aug 2-3, 2026).

window.OWNERS = {
  cedrick: { name: "Cedrick", role: "Sequence lead + sound design", color: "#7ac8ff" },
  luigi:   { name: "Luigi",   role: "BMP / Range / Atlas",           color: "#ffb37a" },
  mae:     { name: "Mae",     role: "On Course / Lessons / Social",  color: "#9ee8a8" },
};

window.SECTIONS = [
  {
    id: "cold-open", thumb: "s01", looms: [{ id: "L-coldopen", src: "Motion Graphics Review · 0:07" }], n: "00", title: "Cold Open", tc: "pre-roll", range: "15–20s before VO",
    owner: "cedrick",
    vo: null,
    paul: [
      "The video starts off with the cold open for about 15 to 20 seconds, and then it plays a benchmark transition.",
    ],
    now: "Cold Open V1 exists and runs 11.2s — it ends on the golden-hour tee shot. It is short of Paul's 15–20s target.",
    todo: [
      "Extend the cold open to 15–20s using graded course B-roll (grip tape, glove, phone going down, driver flush, range at golden hour, tee box first light).",
      "Hard-cut the music to silence on the last frame so the first VO word lands on a downbeat.",
      "No app UI and no screen in frame at any point — human footage only.",
    ],
    assets: [
      { label: "COLD-OPEN-INTO-KEYNOTE.mp4 — cold open → portal → first scene, already assembled with audio bridge", kind: "built" },
      { label: "Portal transition (flash removed per Paul's note)", kind: "built" },
    ],
  },
  {
    id: "belief", thumb: "s01", looms: [{ id: "L-swings", src: "Motion Graphics Review · 0:31" }], n: "01", title: "The Belief", tc: "0:00", range: "0:00 – 0:16.8",
    owner: "cedrick",
    vo: [
      "We started Benchmark Golf with a belief.",
      "A belief that every golfer deserves to actually understand their swing.",
      "That belief became the number one way golfers play golf at home,",
      "with tens of millions of swings analyzed every single month.",
    ],
    paul: [
      "This needs a motion graphic that appears right here. You can look at some of the Whoop example, but full screen.",
      "This is showing off Golf Daddy success right here — tens of millions of swings analyzed every month.",
      "So liquid glass goes here.",
    ],
    now: "Daniel to camera on the bare wall. No graphic at the 0:13 beat yet.",
    todo: [
      "Drop the swings-analyzed liquid-glass stat graphic at 0:13.0, full screen.",
      "Time the number's settle to land before 'every single month' finishes at 0:16.8.",
    ],
    assets: [{ label: "stat-swings — full-screen liquid glass count-up, number is a variable. RENDERED: preview + 4K alpha", kind: "built" }],
    gate: "The swings figure is a CLAIM. The graphic ships with the number as a variable — confirm the real figure with Paul before it goes to master.",
  },
  {
    id: "four-places", thumb: "s02", looms: [{ id: "L-places", src: "Motion Graphics Review · 1:09" }, { id: "L-places2", src: "Epic Launch Script · 0:18" }], n: "02", title: "Four Places", tc: "0:16.8", range: "0:16.8 – 0:30.3",
    owner: "cedrick",
    vo: [
      "But golf isn't played in one place.",
      "It's played on the course, at the range, in the living room, and in our minds.",
      "Our mission was never about one of them.",
      "It was about all of them.",
    ],
    paul: [
      "Here I want to include imagery for every single [place] that we mention — clips of actually being in that scenario. So on the range. In the living room.",
      "Maybe we could have some sort of really cool motion graphic going from each of these scenarios and then playing these scenarios together to show those.",
    ],
    now: "Currently holds on Daniel. The four places are spoken but never shown.",
    todo: [
      "Cut a clip for each named place as it is spoken: course, range, living room, mind.",
      "Then bring all of them on screen together for 'It was about all of them.'",
    ],
    assets: [{ label: "roll-call — four live panels arriving one at a time, then holding together. RENDERED: preview + 4K alpha", kind: "built" }],
    gap: "There is NO living-room / at-home footage anywhere in the project libraries. This has to be shot or sourced — it is the one hard blocker in this section.",
  },
  {
    id: "expansion", thumb: "s03", looms: [{ id: "L-epic", src: "Epic Launch Script · 0:48" }, { id: "L-logo", src: "Epic Launch Script · 0:57" }], n: "03", title: "The Expansion — make it epic", tc: "0:30.3", range: "0:30.3 – 0:46.0",
    owner: "cedrick",
    vo: [
      "So for the past two years, we've been building towards this day.",
      "Today, we're announcing the biggest expansion in Benchmark Golf's history,",
      "intelligence for every moment in golf.",
      "It starts with a swing.",
    ],
    paul: [
      "I want this part to be epic. Like this needs some sort of epic buildup right into here.",
      "Here there is a motion graphics transition that goes into the Benchmark logo and then goes into 'it starts with a swing'.",
    ],
    now: "Plays flat. This is the single biggest energy gap in the cut.",
    todo: [
      "Build to 'intelligence for every moment in golf' — this is the crest of the first act.",
      "Then the branded transition into the logo, landing on 'It starts with a swing.'",
    ],
    assets: [
      { label: "anthem — 19s signature sequence: portal → four counters as live windows → globe → course → wall → lockup", kind: "built" },
      { label: "portal / portal-exit — the letterform transitions into and out of the lockup", kind: "built" },
    ],
  },
  {
    id: "bmp", thumb: "s04", looms: [{ id: "L-bmp1", src: "Epic Launch Script · 1:24" }, { id: "L-bmp2", src: "Epic Launch Script · 1:55" }], n: "04", title: "The BMP Model", tc: "0:46.0", range: "0:46.0 – 1:07.3",
    owner: "luigi",
    vo: [
      "Swing analysis used to mean a studio, a coach, a launch monitor.",
      "Round tracking meant a scorecard, and a caddy meant a person.",
      "Now, it's available to everyone with a phone.",
      "Using the BMP model, we've unlocked millimeter precision.",
      "And we're bringing premium technology to everyone in golf.",
    ],
    paul: [
      "Here we just show something similar to what's on benchmarkmotion.com when it describes the model — the comparison of the BMP model.",
      "But then also I want to show some sort of connection of BMP to 3D pose in this section. Right here there should be BMP basically taking somebody from their body into 3D pose. I think that's a really essential part.",
      "Some of your BMP graphics don't look that good. They look cringe and not that accurate.",
    ],
    now: "No BMP visual in the cut. The earlier stylized skeleton graphic was rejected as inaccurate.",
    todo: [
      "Show the real product overlay language, not invented sports graphics.",
      "Then the essential beat: his real body resolving INTO a 3D pose skeleton.",
    ],
    assets: [{ label: "bmp-swing — rebuilt against the real app overlay: green swing plane, red/amber heat column, amber club-path arc, red→yellow→green reticle, then body → 3D pose. RENDERED: preview + 4K alpha", kind: "built" }],
    gate: "'Millimeter precision' is an unconfirmed claim in the claims list. Do not build a graphic that asserts a specific tolerance number.",
  },
  {
    id: "rollcall", thumb: "s05", looms: [{ id: "L-rollcall", src: "Epic Launch Script · 2:33" }], n: "05", title: "Roll Call", tc: "1:07.3", range: "1:07.3 – 1:13.9",
    owner: "luigi",
    vo: ["At the range, at the course, at home, and with lessons."],
    paul: [
      "It's improved here because this is like doing roll call — talking about things that we're going to talk about in this presentation.",
      "What is Benchmark changing? We're changing at the range, on the course, coaching, and then simulator at home.",
    ],
    now: "Spoken over the bare wall. The four pillars are announced but not established visually.",
    todo: ["Establish all four pillars in 6.6s so the rest of the film pays them off in order."],
    assets: [{ label: "roll-call — same build as section 02, retimed to the four spoken phrases. RENDERED", kind: "built" }],
  },
  {
    id: "range", thumb: "s06", looms: [{ id: "L-rangetrans", src: "Epic Launch Script · 2:52" }, { id: "L-range", src: "Epic Launch Script · 3:23" }], n: "06", title: "Benchmark Range", tc: "1:13.9", range: "1:13.9 – 1:44.6",
    owner: "luigi",
    vo: [
      "The range is where every golfer starts their journey.",
      "And it's where golfers keep coming back, because hitting balls feels like progress.",
      "But a lack of structure and feedback is the worst way to practice.",
      "That's why we're introducing Benchmark Range.",
      "Put down your phone and hit some balls.",
      "Benchmark Range catches every swing on its own, and grades your body position by position.",
    ],
    paul: [
      "We need a good transition into the range here.",
      "When it goes into Benchmark Range, I want to see what it looks like to do a transition into — maybe if the beat works properly — our teaser. Or maybe there's just some B-roll of the range overlay and hit some balls.",
      "I really want him to use the actual B-roll as well.",
    ],
    now: "Luigi has a range edit. Paul's note is that it needs the real B-roll cut into it.",
    todo: [
      "Transition into the range section — chapter card or portal.",
      "Use the REAL range overlay footage for 'catches every swing on its own'.",
      "'Put down your phone' should be shown literally: the phone going down onto the low tripod in the grass.",
    ],
    assets: [
      { label: "Range Swing onboarding clip — the genuine product overlay, down-the-line", kind: "source" },
      { label: "14 graded course B-roll clips in assets/broll/", kind: "built" },
      { label: "chapter — numbered chapter card with self-drawing bezel", kind: "built" },
    ],
  },
  {
    id: "success", thumb: "s07", looms: [{ id: "L-mosaics", src: "Epic Launch Script · 4:04" }, { id: "L-30courses", src: "Epic Launch Script · 4:49" }], n: "07", title: "Success + the 30 courses", tc: "1:44.6", range: "1:44.6 – 1:54.6",
    owner: "luigi",
    vo: [
      "We've unlocked golf in almost a million homes on every continent,",
      "becoming the fastest growing consumer golf product with less than 30 golf courses.",
    ],
    paul: [
      "Here as we're talking about our success we need some clips to really denote that.",
      "I really like the mosaics that we created. We're just showing B-roll of a ton of [users].",
      "We don't want to use our social media B-roll, but we can have different aesthetic content of our different users — like even the couple content shoot with Eddie.",
      "I want to somehow tastefully convey that the product only has 30 courses right now.",
    ],
    now: "No supporting imagery for the success claim.",
    todo: [
      "Use the mosaic wall to carry the 'almost a million homes' line — Paul explicitly likes it.",
      "Source varied user content (not social-media B-roll). The Eddie couple shoot is named as a good example.",
      "Land the 30-courses line as a deliberate setup for Atlas, not as a weakness.",
    ],
    assets: [
      { label: "mosaic + two alternate tile mixes — bento wall of graded footage", kind: "built" },
      { label: "thirty-courses — 30 counted dots, then the scan multiplies them. RENDERED: preview + 4K alpha", kind: "built" },
    ],
    gate: "'Almost a million homes on every continent' and 'fastest growing consumer golf product' are both unconfirmed superlatives in the claims list.",
  },
  {
    id: "atlas", thumb: "s08", looms: [{ id: "L-atlas", src: "Epic Launch Script · 4:56" }, { id: "L-teaser", src: "Epic Launch Script · 5:54" }], n: "08", title: "Benchmark Atlas", tc: "1:54.6", range: "1:54.6 – 2:08.6",
    owner: "luigi",
    vo: [
      "Over the last year, we used satellites to scan every course in the world with precision.",
      "And now, within the golf at home, you'll be able to play any local course or dream destination.",
      "Thanks to Benchmark Atlas.",
    ],
    paul: [
      "This goes into that really sleek, just beautiful graphic of the satellite scanning all the courses, going in depth on the individual golf course, and actually reading and registering it.",
      "It's satellite above the world, and then going close up into an actual course. Understanding it — the type of grass, the type of trees, the type of sand. And then reconstructing that within the Golf at Home for the Benchmark app.",
      "From Benchmark Atlas that goes into probably that announcement teaser that we made. We're still using these satisfying animations.",
    ],
    now: "Luigi has an Atlas edit already.",
    todo: [
      "Follow Paul's exact order: satellite above the globe → close in on one course → read the ground (grass / trees / sand) → reconstruct it inside the app.",
      "Hand off into the announcement teaser at 'Thanks to Benchmark Atlas.'",
    ],
    assets: [
      { label: "atlas — globe, orbiting satellites, scan wedges, dive, and a vector hole that traces itself then plunges to the pin", kind: "built" },
      { label: "thirty-courses — includes the read-the-ground labels beat. RENDERED", kind: "built" },
    ],
    gate: "CRITICAL: 'scan every course in the world' is the highest-exposure claim in the film — Atlas was US-only as of Jul 27. The Atlas graphic is deliberately built to stay on North America and never depicts a real named course. Do not add worldwide course markers.",
  },
  {
    id: "oncourse", thumb: "s09", looms: [{ id: "L-atlasbmp", src: "Epic Launch Script · 6:14" }], n: "09", title: "On Course + the Caddy", tc: "2:08.6", range: "2:08.6 – 2:25.1",
    owner: "mae",
    vo: [
      "On the course, we applied our Atlas and BMP models,",
      "creating the first digital caddy that has all the context to help you play better golf.",
      "Atlas understands the golf course in 3D, while BMP has full context of your golf swing.",
      "Together, it's an actually smart caddy that helps you score better.",
    ],
    paul: [
      "Here I want 3D — while Atlas, making it clear that Atlas has full context of golf courses. Almost like an Apple presentation of Atlas's functionality.",
      "And then BMP — our classic understanding of a golfer's swing in 3D, understanding all the intricacies of where they miss, where they hit the ball.",
      "I'm attaching a video of me using On Course mode, because maybe there are motion graphics or B-rolls you can make from that.",
    ],
    now: "No visual for the caddy concept yet.",
    todo: [
      "Two halves, told cleanly: Atlas knows the course; BMP knows your swing. Then they combine.",
      "Build from the real On Course UI — the screen recording is the reference.",
    ],
    assets: [{ label: "oncourse-caddy — hole view drawn in the real product language (green contour, dashed centreline, yardage HUD, distance pills) resolving into a caddy recommendation card. RENDERED: preview + 4K alpha", kind: "built" }],
    gate: "STANDING ORDER: the caddy claims body and shape knowledge only. No carry distance, no club yardage, no 'how far you hit it' — it contradicts 'we don't read the ball'.",
  },
  {
    id: "lessons", thumb: "s10", looms: [{ id: "L-lessons", src: "Epic Launch Script · 6:54" }], n: "10", title: "Lessons", tc: "2:25.1", range: "2:25.1 – 2:32.3",
    owner: "mae",
    vo: ["It combines every swing, round, and session recorded to give you relevant interactive lessons."],
    paul: [
      "Here we can be showing golfers getting insights, knowing what shots to hit.",
      "There's probably some really great motion graphics to add on to some of our course content — on shot recommendations, fairway hit, things like that.",
    ],
    now: "No lessons visual.",
    todo: [
      "Show the cross-mode idea: range + sim + course feeding one lesson.",
      "Overlay shot recommendation / fairway-hit graphics onto real course content.",
    ],
    assets: [{ label: "glass-pack — six drop-in glass elements; export any one alone via the only variable. RENDERED", kind: "built" }],
  },
  {
    id: "social", thumb: "s11", looms: [{ id: "L-social", src: "Epic Launch Script · 7:15" }], n: "11", title: "Benchmark Social", tc: "2:32.3", range: "2:32.3 – 2:46.5",
    owner: "mae",
    vo: [
      "Our features make capturing videos and rounds seamless for every moment in golf.",
      "But it's our community that makes it feel natural.",
      "Benchmark Social forms a connection between these features,",
      "digitalizing all the moments in golf that we share.",
    ],
    paul: [
      "I love this when Benchmark Social comes out.",
      "The real social clip is the over-the-shoulder clip of me on my phone looking at and liking other people's rounds and stuff like that. So let's make sure that one's included.",
    ],
    now: "Needs the specific over-the-shoulder clip Paul named.",
    todo: [
      "Find and cut the over-the-shoulder phone clip — Paul called this out by name as required.",
      "Build toward the connected-globe idea for the close.",
    ],
    assets: [{ label: "Globe engine from atlas is reusable for a populated social globe with connection lines", kind: "built" }],
  },
  {
    id: "close", thumb: "s12", looms: [{ id: "L-close", src: "Epic Launch Script · 7:44" }], n: "12", title: "The Close — epic", tc: "2:46.5", range: "2:46.5 – 2:51.8",
    owner: "cedrick",
    vo: ["This is the breakthrough moment where golf extends into the digital world."],
    paul: [
      "This needs to be epic. Like an epic buildup. Epic just thing.",
      "And then I kind of see this as like a push-out transition going back to that Benchmark motion graphic transition.",
    ],
    now: "Ends without a crest.",
    todo: [
      "Build the final crest under the last line.",
      "Push-out transition into the Benchmark lockup to close.",
    ],
    assets: [
      { label: "portal-exit — the b swallows the scene, lockup holds, spins out", kind: "built" },
      { label: "anthem final act — lands dead still on the benchmark GOLF lockup", kind: "built" },
    ],
  },
];

window.PACKS = [
  { id: "bmp-model", name: "Benchmark Motion — model benchmark", dur: "14.0s", use: "The BMP comparison from benchmarkmotion.com, rebuilt as motion. Accuracy (28.4mm vs 35.9 / 41.7 / 44.5) then flips to real-time speed (72fps vs 11 / 27 / 20). Winning bar carries the site's flowing spectrum. No version number anywhere, per Paul. Renders as accuracy-only or speed-only via the mode variable.", who: "luigi", tag: "New" },
  { id: "stat-swings", name: "Swings Analyzed", dur: "7.0s", use: "The full-screen liquid-glass stat moment Paul asked for at 0:13. The number counts up and settles, satellite chips arrive, swing-trace arcs drift behind the glass. The figure is a variable — it changes the moment the real number is confirmed.", who: "cedrick", tag: "New tonight" },
  { id: "bmp-swing", name: "BMP Swing", dur: "9.0s", use: "Rebuilt against the REAL app overlay — green swing plane, red/amber heat column, amber club-path arc, red→yellow→green reticle — then his body resolves into a 3D pose skeleton. This replaces the version Paul called inaccurate.", who: "luigi", tag: "New tonight" },
  { id: "roll-call", name: "Roll Call", dur: "6.5s", use: "Range, On Course, At Home, Lessons arriving one at a time in rhythm with the four spoken phrases, then holding together before the lockup. Use at 0:20 and again at 1:07.", who: "luigi", tag: "New tonight" },
  { id: "oncourse-caddy", name: "On Course Caddy", dur: "8.5s", use: "The real hole view drawn as motion graphics — green contour, dashed centreline, yardage HUD, distance pills — resolving into a caddy recommendation card. Club and reason are variables.", who: "mae", tag: "New tonight" },
  { id: "thirty-courses", name: "30 → Every Course", dur: "7.5s", use: "Thirty countable dots, stated plainly, then the satellite scan multiplies them into a dense field and dives into one hole that traces and rebuilds itself. Paul's 'tastefully convey the 30 courses' beat.", who: "luigi", tag: "New tonight" },
  { id: "glass-pack", name: "Glass Pack (6 elements)", dur: "12.0s", use: "Six drop-in glass elements in one reel — stat card, lower third, chip pair, pull-quote, toast, phone frame. Set the 'only' variable to export any single one alone on transparency.", who: "all", tag: "New tonight" },
  { id: "anthem", name: "The Anthem", dur: "19.0s", use: "The full-product signature sequence. Portal → the four counters of the lockup opening as live footage windows → Atlas globe → course → B-roll wall → lockup, dead still. One continuous camera move, no cuts.", who: "cedrick", tag: "Hero" },
  { id: "portal", name: "Portal", dur: "4.2s", use: "Scene A is trapped inside the b's bowl, the word assembles, then the camera dives back through the bowl into scene B. Settle flash removed per Paul.", who: "cedrick", tag: "Transition" },
  { id: "portal-exit", name: "Portal Exit", dur: "4.0s", use: "Paul's favourite. The b flies in from the lens and swallows the scene into its counter; the lockup holds, then spins out.", who: "cedrick", tag: "Transition" },
  { id: "portal-mosaic", name: "Portal → Mosaic", dur: "5.2s", use: "The portal lands as a card inside a gliding wall of graded B-roll, cruises, then a live tile becomes the next scene.", who: "cedrick", tag: "Transition" },
  { id: "mosaic", name: "Mosaic Wall", dur: "4.6s", use: "Bento wall of real graded course footage among dark lockup cards. Paul: 'I really like the mosaics.' Three tile mixes available.", who: "luigi", tag: "Showcase" },
  { id: "atlas", name: "Atlas", dur: "6.4s", use: "Globe, orbiting satellites, scan wedges, then a dive that lands inside a vector golf hole which traces itself and plunges to the pin.", who: "luigi", tag: "Hero" },
  { id: "chapter", name: "Chapter Card", dur: "3.6s", use: "Numbered chapter card — streaked numeral, ghost outline, self-drawing bezel. For section openings.", who: "luigi", tag: "Transition" },
  { id: "aperture", name: "Aperture", dur: "3.2s", use: "Concentric squared-bowl rings iris shut, hold, and open onto the next scene. The quiet boundary.", who: "mae", tag: "Transition" },
  { id: "letter-wipe", name: "Letter Wipe", dur: "3.2s", use: "Giant defocused letterforms sweep the frame as light.", who: "mae", tag: "Transition" },
  { id: "whip", name: "Whip Crash", dur: "1.4s", use: "Pure velocity. Directional streak blur through a light-streak field. For fast mid-section cuts.", who: "cedrick", tag: "Utility" },
  { id: "flare", name: "Floodlight", dur: "1.6s", use: "A bloom grows, whites out with an anamorphic streak, next scene lands backlit.", who: "cedrick", tag: "Utility" },
  { id: "liquid-glass", name: "Liquid Glass", dur: "10.0s", use: "The glass family — stat card, lower third, phone UI frame. Real translucency and moving speculars. Paul: 'always super productive.'", who: "all", tag: "Overlay" },
  { id: "bmp-popout", name: "BMP Pop-Out", dur: "8.0s", use: "Glass analysis panel ejecting from the phone. NOTE: superseded by the rebuilt bmp-swing — this version is the one Paul flagged as inaccurate.", who: "luigi", tag: "Superseded" },
];

// Cross-cutting Loom moments that aren't tied to one beat
window.EXTRA_LOOMS = [
  { id: "L-sound", title: "Sound design", src: "Epic Launch Script · 7:57",
    note: "Ambient at moments, no cringy hype, and each vignette getting its own sound world." },
  { id: "L-4k",    title: "4K delivery",  src: "Epic Launch Script · 8:28",
    note: "Everything conforms to 4K — plan for it rather than retrofitting." },
];

// Visual timeline of the current cut (BENCHMARK-KEYNOTE-HANDOFF.mp4, 171.8s)
window.CUT_LENGTH = 171.8;
window.CUT_MARKS = [
  { id: "belief",      t: 0,     label: "Belief" },
  { id: "four-places", t: 16.8,  label: "Four places" },
  { id: "expansion",   t: 30.3,  label: "Expansion" },
  { id: "bmp",         t: 46.0,  label: "BMP" },
  { id: "rollcall",    t: 67.3,  label: "Roll call" },
  { id: "range",       t: 73.9,  label: "Range" },
  { id: "success",     t: 104.6, label: "Success" },
  { id: "atlas",       t: 114.6, label: "Atlas" },
  { id: "oncourse",    t: 128.6, label: "On Course" },
  { id: "lessons",     t: 145.1, label: "Lessons" },
  { id: "social",      t: 152.3, label: "Social" },
  { id: "close",       t: 166.5, label: "Close" },
];
