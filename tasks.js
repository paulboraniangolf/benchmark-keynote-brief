// Timecode-anchored review items. `at` = position in the current cut
// (BENCHMARK-KEYNOTE-HANDOFF.mp4). `vo` = the exact line it sits under.
window.TASKS = [
  // ---------- COLD OPEN ----------
  { sec:"cold-open", at:"pre-roll", t:0, vo:null, owner:"cedrick",
    text:"Cold open runs 11.2s — cut it to 15–20s. Add ~5–8s from the graded B-roll." },
  { sec:"cold-open", at:"pre-roll", t:0, vo:null, owner:"cedrick",
    text:"Open on the tactile inserts before any wide: grip tape, glove pulled tight, ball on tee." },
  { sec:"cold-open", at:"pre-roll", t:0, vo:null, owner:"cedrick",
    text:"Include the phone going DOWN onto the low tripod in the grass — it sets up 'put down your phone' at 1:33." },
  { sec:"cold-open", at:"~0:11", t:0, vo:null, owner:"cedrick",
    text:"Land the last frame on the golden-hour tee shot, then hard-cut music to silence so 'We started Benchmark Golf' hits a downbeat." },
  { sec:"cold-open", at:"0:00", t:0, vo:null, owner:"cedrick",
    text:"Confirm no app UI and no screen appears anywhere in the cold open." },

  // ---------- 01 BELIEF ----------
  { sec:"belief", at:"0:13.0", t:13.0, vo:"with tens of millions of swings analyzed every single month", owner:"cedrick",
    text:"Cut in stat-swings full screen ON this line — the liquid-glass count-up." },
  { sec:"belief", at:"0:16.8", t:16.8, vo:"…every single month", owner:"cedrick",
    text:"Number must finish settling BEFORE 0:16.8 so it lands before 'But golf isn't played in one place.'" },
  { sec:"belief", at:"0:13.0", t:13.0, vo:"tens of millions of swings", owner:"cedrick",
    text:"CLAIM: confirm the real swings figure with Paul. Graphic ships at 40,000,000 as a placeholder variable." },

  // ---------- 02 FOUR PLACES ----------
  { sec:"four-places", at:"0:20.0", t:20.0, vo:"It's played on the course…", owner:"cedrick",
    text:"Cut a course clip ON the word 'course' (0:20.0)." },
  { sec:"four-places", at:"0:21.5", t:21.5, vo:"…at the range…", owner:"cedrick",
    text:"Cut a range clip ON 'range' (~0:21.5)." },
  { sec:"four-places", at:"0:23.0", t:23.0, vo:"…in the living room…", owner:"cedrick",
    text:"BLOCKER: 'living room' (~0:23.0) has NO footage anywhere in the project. Shoot or source it." },
  { sec:"four-places", at:"0:24.5", t:24.5, vo:"…and in our minds.", owner:"cedrick",
    text:"Decide the visual for 'in our minds' (~0:24.5) — the one abstract place of the four." },
  { sec:"four-places", at:"0:28.5", t:28.5, vo:"It was about all of them.", owner:"cedrick",
    text:"Bring all four on screen together ON 'all of them' (0:28.5) — roll-call graphic is built for this." },

  // ---------- 03 EXPANSION ----------
  { sec:"expansion", at:"0:30.3", t:30.3, vo:"So for the past two years…", owner:"cedrick",
    text:"Start the build here — this is the runway into the first crest." },
  { sec:"expansion", at:"0:41.1", t:41.1, vo:"intelligence for every moment in golf", owner:"cedrick",
    text:"Peak the build ON this line (0:41.1). Paul: 'I want this part to be epic.' This is the crest of act one." },
  { sec:"expansion", at:"0:44.6", t:44.6, vo:"It starts with a swing.", owner:"cedrick",
    text:"Branded transition into the Benchmark logo, resolving ON 'It starts with a swing' (0:44.6)." },

  // ---------- 04 BMP ----------
  { sec:"bmp", at:"0:46.0", t:46.0, vo:"Swing analysis used to mean a studio, a coach, a launch monitor.", owner:"luigi",
    text:"Show the OLD way over 0:46–0:56 — studio / coach / launch monitor / scorecard, three fast beats." },
  { sec:"bmp", at:"0:56.3", t:56.3, vo:"Now, it's available to everyone with a phone.", owner:"luigi",
    text:"Turn on this line — one phone, one golfer. The pivot from old to new." },
  { sec:"bmp", at:"0:58.7", t:58.7, vo:"Using the BMP model…", owner:"luigi",
    text:"Cut in bmp-swing here: the real app overlay — green plane, heat column, club-path arc, red→yellow→green reticle." },
  { sec:"bmp", at:"1:00.5", t:60.5, vo:"…we've unlocked millimeter precision.", owner:"luigi",
    text:"Body → 3D pose lands here. Paul: 'that's a really essential part.' Do not skip it." },
  { sec:"bmp", at:"0:58.7", t:58.7, vo:"millimeter precision", owner:"luigi",
    text:"CLAIM: 'millimeter precision' is unconfirmed. Do not put a tolerance number on screen." },

  // ---------- 05 ROLL CALL ----------
  { sec:"rollcall", at:"1:07.3", t:67.3, vo:"At the range,", owner:"luigi", text:"RANGE panel arrives on 'At the range' (1:07.3)." },
  { sec:"rollcall", at:"1:09.0", t:69.0, vo:"at the course,", owner:"luigi", text:"ON COURSE panel on 'at the course' (~1:09.0)." },
  { sec:"rollcall", at:"1:10.5", t:70.5, vo:"at home,", owner:"luigi", text:"AT HOME panel on 'at home' (~1:10.5) — the simulator pillar." },
  { sec:"rollcall", at:"1:12.0", t:72.0, vo:"and with lessons.", owner:"luigi", text:"LESSONS panel on 'with lessons' (~1:12.0), all four holding by 1:13.9." },

  // ---------- 06 RANGE ----------
  { sec:"range", at:"1:13.9", t:73.9, vo:"The range is where every golfer starts their journey.", owner:"luigi",
    text:"Transition INTO the range here — Paul: 'we need a good transition into the range.' Chapter card or portal." },
  { sec:"range", at:"1:17.4", t:77.4, vo:"…because hitting balls feels like progress.", owner:"luigi",
    text:"Real range B-roll over 1:17–1:23 — Paul specifically wants the actual footage cut in." },
  { sec:"range", at:"1:23.2", t:83.2, vo:"But a lack of structure and feedback is the worst way to practice.", owner:"luigi",
    text:"Show the problem: the tripod ritual, the clip nobody watches." },
  { sec:"range", at:"1:28.9", t:88.9, vo:"That's why we're introducing Benchmark Range.", owner:"luigi",
    text:"The product reveal beat — test whether the announcement teaser lands here on the music." },
  { sec:"range", at:"1:33.4", t:93.4, vo:"Put down your phone and hit some balls.", owner:"luigi",
    text:"Show it literally: phone going down on the tripod, golfer turning away and hitting." },
  { sec:"range", at:"1:36.7", t:96.7, vo:"catches every swing on its own, and grades your body position by position", owner:"luigi",
    text:"Use the REAL range overlay footage here (green plane + arc) — most convincing asset we have." },

  // ---------- 07 SUCCESS ----------
  { sec:"success", at:"1:44.6", t:104.6, vo:"We've unlocked golf in almost a million homes on every continent,", owner:"luigi",
    text:"Mosaic wall of varied user content here — Paul: 'I really like the mosaics.'" },
  { sec:"success", at:"1:44.6", t:104.6, vo:"almost a million homes", owner:"luigi",
    text:"Source varied user footage. NOT social-media B-roll. The Eddie couple shoot is the right flavour." },
  { sec:"success", at:"1:48.6", t:108.6, vo:"with less than 30 golf courses.", owner:"luigi",
    text:"Land the 30 tastefully ON this line — setup for Atlas, not a weakness. thirty-courses graphic." },
  { sec:"success", at:"1:44.6", t:104.6, vo:"almost a million homes / fastest growing", owner:"luigi",
    text:"CLAIM: both superlatives are unconfirmed. Flag before master." },

  // ---------- 08 ATLAS ----------
  { sec:"atlas", at:"1:54.6", t:114.6, vo:"Over the last year, we used satellites to scan…", owner:"luigi",
    text:"Satellite above the globe starts here (1:54.6)." },
  { sec:"atlas", at:"1:56.5", t:116.5, vo:"…every course in the world with precision.", owner:"luigi",
    text:"Close in on ONE course — the dive." },
  { sec:"atlas", at:"1:59.1", t:119.1, vo:"And now, within the golf at home…", owner:"luigi",
    text:"Read the ground: grass, tree line, sand. Paul wants it 'actually reading and registering'." },
  { sec:"atlas", at:"2:01.5", t:121.5, vo:"…play any local course or dream destination.", owner:"luigi",
    text:"Reconstruct the course inside the app — the payoff of the scan." },
  { sec:"atlas", at:"2:04.4", t:124.4, vo:"Thanks to Benchmark Atlas.", owner:"luigi",
    text:"Hand off into the announcement teaser ON this line (2:04.4)." },
  { sec:"atlas", at:"1:54.6", t:114.6, vo:"scan every course in the world", owner:"luigi",
    text:"CLAIM — HIGHEST RISK: Atlas is US-only. Keep visuals on North America, no worldwide markers." },

  // ---------- 09 ON COURSE ----------
  { sec:"oncourse", at:"2:15.7", t:135.7, vo:"Atlas understands the golf course in 3D,", owner:"mae",
    text:"Atlas half: the hole in 3D with full course context. Paul: 'almost like an Apple presentation.'" },
  { sec:"oncourse", at:"2:18.5", t:138.5, vo:"while BMP has full context of your golf swing.", owner:"mae",
    text:"BMP half: the swing in 3D — where they miss, how they hit it." },
  { sec:"oncourse", at:"2:21.4", t:141.4, vo:"Together, it's an actually smart caddy…", owner:"mae",
    text:"The two combine here (2:21.4) — the caddy card resolves." },
  { sec:"oncourse", at:"2:21.4", t:141.4, vo:"actually smart caddy", owner:"mae",
    text:"STANDING ORDER: body and shape language only. No carry distance, no club yardage, ever." },

  // ---------- 10 LESSONS ----------
  { sec:"lessons", at:"2:25.1", t:145.1, vo:"It combines every swing, round, and session recorded…", owner:"mae",
    text:"Show the three sources feeding in — range, sim, course." },
  { sec:"lessons", at:"2:29.0", t:149.0, vo:"…to give you relevant interactive lessons.", owner:"mae",
    text:"Overlay shot recommendation / fairway-hit graphics on real course content." },

  // ---------- 11 SOCIAL ----------
  { sec:"social", at:"2:36.9", t:156.9, vo:"But it's our community that makes it feel natural.", owner:"mae",
    text:"FIND AND CUT the over-the-shoulder phone clip of Paul liking other people's rounds. Named by him specifically." },
  { sec:"social", at:"2:42.9", t:162.9, vo:"digitalizing all the moments in golf that we share.", owner:"mae",
    text:"Build toward the connected globe for the close." },

  // ---------- 12 CLOSE ----------
  { sec:"close", at:"2:46.5", t:166.5, vo:"This is the breakthrough moment…", owner:"cedrick",
    text:"Start the final crest here. Paul: 'This needs to be epic. Like an epic buildup.'" },
  { sec:"close", at:"2:51.8", t:171.8, vo:"…where golf extends into the digital world.", owner:"cedrick",
    text:"Push-out transition into the Benchmark lockup to end. Last frame is the static lockup." },

  // ---------- CROSS-CUTTING ----------
  { sec:"sound", at:"whole film", t:999, vo:null, owner:"cedrick",
    text:"Ambient bed through the body. Paul: 'I don't want cringy hype.'" },
  { sec:"sound", at:"per section", t:999, vo:null, owner:"cedrick",
    text:"Give each vignette its own sound world — 'it can be its own little vibe.'" },
  { sec:"sound", at:"every transition", t:999, vo:null, owner:"cedrick",
    text:"Land each transition impact on a downbeat. Cover moments have ±3 frames of slack." },
  { sec:"delivery", at:"whole film", t:999, vo:null, owner:"cedrick",
    text:"Conform at 4K — do not upscale a 1080 sequence." },
  { sec:"delivery", at:"whole film", t:999, vo:null, owner:"cedrick",
    text:"One consistent grade across stage and course. Match the 14 graded B-roll clips." },
  { sec:"delivery", at:"stage shots", t:999, vo:null, owner:"cedrick",
    text:"Assign an owner for the stage cleanup / AI renders — currently unassigned." },
];
window.TASK_SECTIONS = {
  "sound":    { n:"S", title:"Sound design", owner:"cedrick" },
  "delivery": { n:"D", title:"Delivery & grade", owner:"cedrick" },
};
