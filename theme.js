(function () {
  var storageKey = "python-materials-theme";
  var root = document.documentElement;
  var choices = document.querySelectorAll("[data-theme-choice]");
  var status = document.getElementById("theme-status");
  var savedTheme = "system";

  function applyTheme(theme) {
    if (theme === "light" || theme === "dark") {
      root.setAttribute("data-theme", theme);
    } else {
      root.removeAttribute("data-theme");
    }
    choices.forEach(function (choice) {
      choice.setAttribute("aria-pressed", String(choice.dataset.themeChoice === theme));
    });
  }

  try {
    savedTheme = localStorage.getItem(storageKey) || "system";
  } catch (error) {
    if (status) {
      status.textContent = "Nastavenie sa nedá načítať z úložiska tohto prehliadača.";
    }
  }
  applyTheme(savedTheme);

  choices.forEach(function (choice) {
    choice.addEventListener("click", function () {
      var theme = choice.dataset.themeChoice;
      applyTheme(theme);
      try {
        localStorage.setItem(storageKey, theme);
        if (status) {
          status.textContent = theme === "system"
            ? "Vzhľad sa prispôsobuje nastaveniu zariadenia."
            : "Nastavenie vzhľadu bolo uložené.";
        }
      } catch (error) {
        if (status) {
          status.textContent = "Vzhľad je zmenený, ale prehliadač ho nedokáže uložiť.";
        }
      }
    });
  });

  window.addEventListener("storage", function (event) {
    if (event.key === storageKey) {
      applyTheme(event.newValue || "system");
    }
  });

  function createVideoSection(heading, videos) {
    var section = document.createElement("section");
    var title = document.createElement("h2");
    var grid = document.createElement("div");

    section.className = "video-section";
    section.setAttribute("aria-label", heading);
    title.textContent = heading;
    grid.className = "video-grid";
    section.appendChild(title);
    section.appendChild(grid);

    videos.forEach(function (video) {
      var card = document.createElement("article");
      var cardTitle = document.createElement("h3");
      var frame = document.createElement("iframe");
      var link = document.createElement("a");

      card.className = "video-card";
      cardTitle.textContent = video.title;
      frame.className = "video-frame";
      frame.src = "https://www.youtube-nocookie.com/embed/" + video.id;
      frame.title = video.title;
      frame.loading = "lazy";
      frame.referrerPolicy = "strict-origin-when-cross-origin";
      frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      frame.allowFullscreen = true;
      link.href = "https://www.youtube.com/watch?v=" + video.id;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "Otvoriť video na YouTube";

      card.appendChild(cardTitle);
      card.appendChild(frame);
      card.appendChild(link);
      grid.appendChild(card);
    });

    return section;
  }

  function addTopicVideos() {
    var style = document.createElement("style");
    var slovak = {
      setup: { id: "deLvhbagt5U", title: "Python kurz v slovenčine – VS Code inštalácia" },
      intro: { id: "hjYF_WRrreQ", title: "Python kurz v slovenčine – úvod a inštalácia" },
      numbers: { id: "U3Px6MDEm5I", title: "Python kurz v slovenčine – numerické dáta a operácie" },
      variables: { id: "iO-G70z1iqE", title: "Python kurz v slovenčine – premenné" },
      boolean: { id: "JWLHUK16WTI", title: "Python kurz v slovenčine – dátový typ boolean" },
      strings: { id: "MMxxnj5aP8Y", title: "Python kurz v slovenčine – reťazce" },
      stringOps: { id: "pUyZLSJHxZc", title: "Python kurz v slovenčine – reťazcové operácie" },
      arrays: { id: "rEhB9esEu3U", title: "Python kurz v slovenčine – polia" },
      conditions: { id: "S7HWbBG-vy4", title: "Python kurz v slovenčine – podmienky" },
      forLoop: { id: "VH_YaAI-BKI", title: "Python kurz v slovenčine – cyklus for" },
      whileLoop: { id: "kTFkZDNLHt4", title: "Python kurz v slovenčine – cyklus while" },
      nestedLoops: { id: "PY_sfXfCLOU", title: "Python kurz v slovenčine – vnorené cykly" },
      functions: { id: "ZeTobU9tomc", title: "Python kurz v slovenčine – funkcie" },
      tuples: { id: "AFTZeCB6WEk", title: "Python kurz v slovenčine – tuples" },
      dictionaries: { id: "DdemSIz-MpQ", title: "Python kurz v slovenčine – slovníky" },
      oopIntro: { id: "e913JbwsGmI", title: "Objektovo orientované programovanie – úvod" },
      classes: { id: "jJv-12C4IHk", title: "Objektovo orientované programovanie – triedy a objekty" },
      inheritance: { id: "eERQiO9OIGw", title: "Objektovo orientované programovanie – dedenie" }
    };
    var english = {
      start: { id: "Sg4GMVMdOPo", title: "Start coding with Python in 5 minutes – Bro Code" },
      roadmap: { id: "wFEC7VbWBZo", title: "Python Learning Roadmap for Beginners" },
      variables: { id: "7IoQ5BGkTJo", title: "Learn Python Variables in 10 Minutes – Bro Code" },
      variableTypes: { id: "KeA39II7AO8", title: "Python Variables & Data Types – The Building Blocks of Code" },
      casting: { id: "Qtq83lAoogM", title: "Learn Type Casting in 7 Minutes – Bro Code" },
      math: { id: "jc7TBgMS_kw", title: "Math in Python is Easy – Bro Code" },
      ifStatements: { id: "FvMPfrgGeKs", title: "If Statements in Python – Bro Code" },
      logical: { id: "W7luvtXeQTA", title: "Logical Operators in Python – Bro Code" },
      forLoop: { id: "dHANJ4l6fwA", title: "Python For Loops – Programming for Beginners" },
      functions: { id: "aftw0WX4oCc", title: "Python Functions – Quick Coding Project for Beginners" },
      classes: { id: "f0TrMH9s-VE", title: "Python Classes and Objects – OOP for Beginners" },
      inheritance: { id: "6c6NYPjO_rI", title: "OOP Class Inheritance and Private Class Members" },
      arrays: { id: "jzJlq35dQII", title: "Dynamic Arrays" },
      dataStructures: { id: "xX5iOYCJmBI", title: "What Are Data Structures and Algorithms?" },
      stringIndexing: { id: "7pXf1DUuaIo", title: "String Indexing in Python – Bro Code" },
      bubbleSort: { id: "Dv4qLJcxus8", title: "Learn Bubble Sort in 7 Minutes" },
      selectionSort: { id: "EwjnF7rFLns", title: "Learn Selection Sort in 8 Minutes" },
      insertionSort: { id: "8mJ-OhcfpYg", title: "Learn Insertion Sort in 7 Minutes" },
      recursion: { id: "m1Fjdnj_Mds", title: "Recursion Simply Explained with Python Code Examples" },
      recursionBasics: { id: "u8Xam9EsqXQ", title: "Learn Recursion in 8 Minutes" }
    };
    var topics = {
      "1.1 Bezpečnosť pri práci.html": { sk: [slovak.intro], en: [english.start] },
      "1.2 Vstup do predmetu.html": { sk: [slovak.setup], en: [english.start] },
      "2.1 Algoritmus - základné pojmy, vlastnosti algoritmov.html": { en: [english.dataStructures] },
      "2.2 Základné formy a typy algoritmov.html": { sk: [slovak.conditions, slovak.forLoop], en: [english.ifStatements, english.forLoop] },
      "2.3 Vývojový diagram.html": { sk: [slovak.conditions], en: [english.ifStatements] },
      "2.4 Algoritmizácia výpočtu plôch a objemov.html": { sk: [slovak.numbers], en: [english.math] },
      "2.5 Algoritmizácia podmienky.html": { sk: [slovak.conditions], en: [english.ifStatements, english.logical] },
      "2.6 Algoritmizácia vnorenej podmienky.html": { sk: [slovak.conditions], en: [english.ifStatements, english.logical] },
      "2.7 Algoritmizácia cyklu.html": { sk: [slovak.forLoop, slovak.whileLoop], en: [english.forLoop] },
      "2.8 Algoritmizácia vnoreného cyklu.html": { sk: [slovak.nestedLoops], en: [english.forLoop] },
      "2.9 Algoritmizácia podprogramov.html": { sk: [slovak.functions], en: [english.functions] },
      "2.10 Algoritmizácia funkcií.html": { sk: [slovak.functions], en: [english.functions] },
      "2.11 Algoritmus triedenia.html": { sk: [slovak.arrays], en: [english.bubbleSort, english.selectionSort, english.insertionSort] },
      "2.11.1 Rekurzia a rekurzivne triedenie.html": { en: [english.recursion, english.recursionBasics] },
      "3.2 Jazyky vyššieho typu.html": { sk: [slovak.oopIntro, slovak.classes, slovak.inheritance], en: [english.classes, english.inheritance] },
      "1.1.3 Vstup do predmetu a hodnotenie.html": { sk: [slovak.intro, slovak.setup], en: [english.roadmap] },
      "2.2.1 Premenné, dátové typy a operácie v Pythone.html": { sk: [slovak.variables, slovak.numbers, slovak.boolean], en: [english.variables, english.variableTypes] },
      "2.2.2 Pretypovanie v Pythone.html": { sk: [slovak.variables], en: [english.casting] },
      "2.7.1 Dátové štruktúry v Pythone.html": { sk: [slovak.arrays, slovak.tuples, slovak.dictionaries], en: [english.dataStructures, english.arrays] },
      "2.7.2 Výrezy v Pythone.html": { sk: [slovak.arrays, slovak.stringOps], en: [english.stringIndexing] },
      "2.7.3 List Comprehension v Pythone.html": { sk: [slovak.arrays, slovak.forLoop], en: [english.forLoop, english.arrays] }
    };
    var filename = decodeURIComponent(window.location.pathname.split("/").pop());
    var videos = topics[filename];
    var heading = document.querySelector("h1");

    if (!videos || !heading) {
      return;
    }

    style.textContent = ".video-section{margin:2rem 0;padding:1.25rem;border:1px solid var(--border,var(--line,#d9dee7));border-radius:12px;background:var(--surface,var(--card,#fff));color:var(--text,var(--fg,#1c2330))}.video-section h2{margin-top:0}.video-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:1rem}.video-card{min-width:0;margin:0;padding:1rem;border:1px solid var(--border,var(--line,#d9dee7));border-radius:10px;background:var(--bg,#f7f8fa)}.video-card h3{margin-top:0}.video-frame{display:block;width:100%;aspect-ratio:16/9;border:0;border-radius:8px;background:#000;margin-bottom:.75rem}.video-card a{color:var(--accent,var(--acc,#1f6feb))}";
    document.head.appendChild(style);

    if (videos.sk && videos.sk.length) {
      heading.insertAdjacentElement("afterend", createVideoSection("Videá po slovensky", videos.sk));
    }

    var footer = document.querySelector("footer");
    if (videos.en && videos.en.length) {
      var englishSection = createVideoSection("Videos in English", videos.en);
      if (footer) {
        footer.parentNode.insertBefore(englishSection, footer);
      } else {
        document.body.appendChild(englishSection);
      }
    }
  }

  addTopicVideos();
})();
