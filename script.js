// ─── TRANSLATIONS ───
const i18n = {
    bg: {
        nav_home: "Начало",
        nav_about: "За нас", nav_code: "Код", nav_project: "Проект",
        nav_docs: "Документи", nav_team: "Отбор", nav_location: "Място", nav_contact: "Свържи се",
        nav_models: "3D Модели",
        nav_more: "Още",
        hero_badge: "✨ FLL Отбор 2025-26",
        hero_sub: "Млад FIRST LEGO League отбор от инженери, мислители и мечтатели. Изграждаме роботи, решаваме проблеми и оставяме следа.",
        hero_btn1: "📄 Документи", hero_btn2: "💻 Код",
        stat_members: "Члена", stat_seasons: "Сезона", stat_dedication: "Отдаденост", stat_ideas: "Идеи",
        scroll: "Scroll", hero_loading: "Зареждане на 3D модел...",
        models_title: "3D Архив на Робота", models_desc: "Изберете модел от списъка, за да разгледате развитието на нашия робот.",
        models_loading: "ЗАРЕЖДАНΕ...", models_main: "Основен Робот", models_run: "Мисия: Run",
        btn_reset: "НУЛИРАНЕ", btn_auto_rotate: "АВТО-РОТАЦИЯ",
        about_label: "За нас", about_title: "Кои сме ние",
        about_desc: "Отбор от седем младежи, обединени от страст към инженерството и иновациите.",
        about_robot_title: "Дизайн на робот",
        about_robot_desc: "Проектираме, конструираме и програмираме LEGO® роботи, оптимизирани за прецизност и скорост.",
        about_presentation: "Презентация", about_folder: "Папка",
        about_project_title: "Иновативен проект",
        about_project_desc: "Решаваме реални проблеми с креативни инженерни идеи, вдъхновени от темата на сезона.",
        about_video: "Видео",
        about_values_title: "Основни ценности",
        about_values_desc: "Уважение, откритост, въздействие, приобщаване, работа в екип и забавление — нашата ДНК.",
        code_label: "Код", code_title: "Нашият код на победата",
        code_desc: "Чист Python for SPIKE Prime. Open-source, модулен, оптимизиран.",
        project_label: "Проект", project_title: "Нашият иновативен проект",
        project_desc: "Решение, което прави света около нас по-добро място.",
        project_name: "Автоматизирана система за обесоляване на артефакти",
        project_problem_label: "Проблем",
        project_problem: "Традиционното обезсоляване на морски артефакти е бавен, изцяло ръчен и неточен процес, изискващ пътуване стотици километри за рутинни измервания.",
        project_solution_label: "Решение",
        project_solution: "Системата ASOA 2.0 автоматизира мониторинга чрез IoT платформа и научен алгоритъм, позволяващ наблюдение в реално време.",
        project_impact_label: "Въздействие",
        project_impact: "Съкращава времето за консервация с месеци, минимизира грешките и гарантира спасяването на световното подводно наследство.",
        project_docs: "📄 Документация", project_site: "🌐 Виж сайта",
        docs_label: "Документи", docs_title: "Архив на отбора",
        docs_desc: "Цялата ни работа на едно място — открита и достъпна.",
        doc1: "Златните правила на Механо", doc2: "Инструкции на робота",
        doc3: "Инженерна тетрадка", doc4: "3D модели",
        doc_open: "Отвори ↗", docs_cta: "📁 Отвори Google Drive →",
        team_label: "Отбор", team_title: "Хората зад Механо",
        team_desc: "Девет уникални умове. Една обща мисия.",
        mentor: "Ментор", role_mentor: "Ментор", role_programmer: "Програмист",
        role_tech: "Техник", role_builder: "Конструктор", role_3d: "3D моделиране", role_research: "Проучване",
        partner_label: "Партньор", partner_title: "Заедно правим бъдещето",
        partner_desc: "Отборът Power Vortex е от Шумен – град с богата история. Благодарим на нашия официален партньор за подкрепата, ресурсите и доверието. Вашият принос превръща мечтите ни в реалност.",
        location_label: "Място", location_title: "Където се случва магията",
        location_desc: "Тук се събираме, проектираме и програмираме нашия робот.",
        location_school: "Професионална гимназия по механоелектроника и електроника",
        location_school_desc: "Нашата база — училищната STEM лаборатория, където се ражда всеки прототип и идея.",
        location_map_btn: "📍 Виж на картата",
        contact_label: "Контакт", contact_title: "Свържи се с нас",
        contact_desc: "Имаш въпрос, идея или искаш да си партньор? Пиши ни.",
        contact_email_label: "Имейл", contact_school_label: "Училище", contact_location_label: "Локация",
        contact_school_name: "ПГМЕΕ Бургас", contact_location_city: "Бургас, България",
        location_address: "ул. Стефан Стамболов 67, Бургас",
        value_teamwork: "Работа в екип", value_inclusion: "Приобщаване", value_impact: "Въздействие",
        footer_text: "© 2025 Механо. Всички права запазени.",
        name_boyana: "Бояна Георгиева", name_nikola: "Никола Чанев", name_djefer: "Джефер Ходжов",
        name_boris: "Борис Царев", name_deyvid: "Дейвид Желязков", name_danail: "Данаил Хитров",
        name_ivan: "Иван Пашов", name_dilyan: "Дилян Йорданов", name_kristian: "Кристиян Петков",
        code_filename: "mehano_bot.py", code_badge: "PYTHON 3",
        code_action: "▶ Изпълни в GitHub →",
        code_snippet: `<span class="cm"># ⚙️ МЕХАНО v2.0 — Секретен алгоритъм (не показвай на съдиите)</span>

<span class="kw">import</span> <span class="var">spike</span><span class="op">,</span> <span class="var">food</span><span class="op">,</span> <span class="var">random</span><span class="op">,</span> <span class="var">dreams</span><span class="op">,</span> <span class="var">panic</span>
<span class="kw">from</span> <span class="var">mehano</span> <span class="kw">import</span> <span class="var">надежда</span><span class="op">,</span> <span class="var">воля</span><span class="op">,</span> <span class="var">храна</span>

<span class="cls">РОБОТ</span>         <span class="op">=</span> <span class="str">"Робо"</span>   <span class="cm"># най-умният робот в Бургас</span>
<span class="cls">ХРАНА_ИЗЯДЕНА</span> <span class="op">=</span> <span class="num">47</span>            <span class="cm"># точно колкото commits</span>
<span class="cls">ВЕРОЯТНОСТ_ПОБЕДА</span> <span class="op">=</span> <span class="num">0.999</span>    <span class="cm"># останалото е за всеки случай</span>
<span class="cls">МЕНТОР_СПИ</span>    <span class="op">=</span> <span class="kw">True</span>          <span class="cm"># винаги True след 22:00</span>

<span class="kw">def</span> <span class="fn">зареди_робота</span>():
    <span class="kw">if</span> <span class="var">food</span>.<span class="fn">is_empty</span>():
        <span class="kw">raise</span> <span class="cls">CriticalError</span>(<span class="str">"Екипът не може без храна 🍔"</span>)
    <span class="fn">print</span>(<span class="str">"Робо-9000 се събужда..."</span>)
    <span class="var">spike</span>.<span class="var">motor_a</span>.<span class="fn">run</span>(<span class="var">speed</span><span class="op">=</span><span class="num">100</span>)
    <span class="kw">return</span> <span class="str">"🤖 Готов за битка"</span>

<span class="kw">def</span> <span class="fn">изпълни_мисия</span>(<span class="var">мисия</span><span class="op">,</span> <span class="var">опити</span><span class="op">=</span><span class="num">3</span>):
    <span class="kw">for</span> <span class="var">i</span> <span class="kw">in</span> <span class="fn">range</span>(<span class="var">опити</span>):
        <span class="kw">try</span>:
            <span class="var">робот</span>.<span class="fn">направи_нещо_умно</span>(<span class="var">мисия</span>)
            <span class="fn">print</span>(<span class="str">f"Мисия {мисия} — успех! 🎉"</span>)
            <span class="kw">break</span>
        <span class="kw">except</span> <span class="cls">LegoPадна</span>:
            <span class="fn">print</span>(<span class="str">"Не видяха... надявам се 🙈"</span>)

<span class="kw">def</span> <span class="fn">спечели_турнира</span>():
    <span class="fn">зареди_робота</span>()
    <span class="var">мисии</span> <span class="op">=</span> [<span class="num">9</span><span class="op">,</span> <span class="num">10</span><span class="op">,</span> <span class="num">13</span>]
    <span class="kw">for</span> <span class="var">мисия</span> <span class="kw">in</span> <span class="var">мисии</span>:
        <span class="fn">изпълни_мисия</span>(<span class="var">мисия</span>)
    <span class="kw">if</span> <span class="var">random</span>.<span class="fn">random</span>() <span class="op">&lt;</span> <span class="cls">ВЕРОЯТНОСТ_ПОБЕДА</span>:
        <span class="kw">return</span> <span class="str">"🏆 Трофей получен. Поръчваме храна."</span>
    <span class="kw">else</span>:
        <span class="kw">return</span> <span class="str">"😤"</span>

<span class="fn">print</span>(<span class="fn">спечели_турнира</span>())`,
    },
    en: {
        nav_home: "Home",
        nav_about: "About", nav_code: "Code", nav_project: "Project",
        nav_docs: "Documents", nav_team: "Team", nav_location: "Location", nav_contact: "Contact",
        nav_models: "3D Models",
        nav_more: "More",
        hero_badge: "✨ FLL Team 2025-26",
        hero_sub: "A young FIRST LEGO League team of engineers, thinkers and dreamers. We build robots, solve problems and leave our mark.",
        hero_btn1: "📄 Documents", hero_btn2: "💻 Code",
        stat_members: "Members", stat_seasons: "Seasons", stat_dedication: "Dedication", stat_ideas: "Ideas",
        scroll: "Scroll", hero_loading: "Loading 3D model...",
        models_title: "3D Robot Archive", models_desc: "Select a model from the list to explore our robot's development.",
        models_loading: "LOADING...", models_main: "Main Robot", models_run: "Mission: Run",
        btn_reset: "RESET", btn_auto_rotate: "AUTO-ROTATE",
        about_label: "About us", about_title: "Who we are",
        about_desc: "A team of seven young people united by a passion for engineering and innovation.",
        about_robot_title: "Robot Design",
        about_robot_desc: "We design, build and program LEGO® robots optimized for precision and speed.",
        about_presentation: "Presentation", about_folder: "Folder",
        about_project_title: "Innovation Project",
        about_project_desc: "We solve real problems with creative engineering ideas inspired by the season's theme.",
        about_video: "Video",
        about_values_title: "Core Values",
        about_values_desc: "Respect, openness, impact, inclusion, teamwork and fun — our DNA.",
        code_label: "Code", code_title: "Our Winning Code",
        code_desc: "Clean Python for SPIKE Prime. Open-source, modular, optimized.",
        project_label: "Project", project_title: "Our Innovation Project",
        project_desc: "A solution that makes the world around us a better place.",
        project_name: "Automated Artifact Desalination System",
        project_problem_label: "Problem",
        project_problem: "Traditional desalination of marine artifacts is a slow, entirely manual and inaccurate process requiring conservators to travel hundreds of kilometers for routine measurements.",
        project_solution_label: "Solution",
        project_solution: "ASOA 2.0 automates monitoring via an IoT platform and scientific algorithm, allowing experts to track the process in real time remotely.",
        project_impact_label: "Impact",
        project_impact: "ASOA 2.0 reduces conservation time by months, minimizes errors and logistics costs, ensuring the preservation of underwater cultural heritage.",
        project_docs: "📄 Documentation", project_site: "🌐 Visit Site",
        docs_label: "Documents", docs_title: "Team Archive",
        docs_desc: "All our work in one place — open and accessible.",
        doc1: "Механо Golden Rules", doc2: "Robot Instructions",
        doc3: "Engineering Notebook", doc4: "3D Models",
        doc_open: "Open ↗", docs_cta: "📁 Open Google Drive →",
        team_label: "Team", team_title: "The People Behind Механо",
        team_desc: "Nine unique minds. One shared mission.",
        mentor: "Mentor", role_mentor: "Mentor", role_programmer: "Programmer",
        role_tech: "Technician", role_builder: "Builder", role_3d: "3D Modeling", role_research: "Research",
        partner_label: "Partner", partner_title: "Building the Future Together",
        partner_desc: "Team Power Vortex is from Shumen — a city with a rich history. We thank our official partner for their support, resources and trust. Your contribution turns our dreams into reality.",
        location_label: "Location", location_title: "Where the Magic Happens",
        location_desc: "Here we meet, design and program our robot.",
        location_school: "Professional High School of Mechatronics and Electronics",
        location_school_desc: "Our base — the school STEM lab where every prototype, line of code and new idea is born.",
        location_map_btn: "📍 View on Map",
        contact_label: "Contact", contact_title: "Get in Touch",
        contact_desc: "Have a question, idea or want to be a partner? Write to us.",
        contact_email_label: "Email", contact_school_label: "School", contact_location_label: "Location",
        contact_school_name: "PGMEE Burgas", contact_location_city: "Burgas, Bulgaria",
        location_address: "67 Stefan Stambolov St, Burgas",
        value_teamwork: "Teamwork", value_inclusion: "Inclusion", value_impact: "Impact",
        footer_text: "© 2025 Mehano. All rights reserved.",
        name_boyana: "Boyana Georgieva", name_nikola: "Nikola Chanev", name_djefer: "Djefer Hodzhov",
        name_boris: "Boris Tsarev", name_deyvid: "Deyvid Zhelyazkov", name_danail: "Danail Hitrov",
        name_ivan: "Ivan Pashov", name_dilyan: "Dilyan Yordanov", name_kristian: "Kristiyan Petkov",
        code_filename: "mehano_bot.py", code_badge: "PYTHON 3",
        code_action: "▶ Run on GitHub →",
        code_snippet: `<span class="cm"># ⚙️ MEHANO v2.0 — Secret Algorithm (don't show the judges)</span>

<span class="kw">import</span> <span class="var">spike</span><span class="op">,</span> <span class="var">food</span><span class="op">,</span> <span class="var">random</span><span class="op">,</span> <span class="var">dreams</span><span class="op">,</span> <span class="var">panic</span>
<span class="kw">from</span> <span class="var">mehano</span> <span class="kw">import</span> <span class="var">hope</span><span class="op">,</span> <span class="var">will</span><span class="op">,</span> <span class="var">food_items</span>

<span class="cls">ROBOT</span>         <span class="op">=</span> <span class="str">"Robo"</span>   <span class="cm"># the smartest robot in Burgas</span>
<span class="cls">FOOD_EATEN</span>    <span class="op">=</span> <span class="num">47</span>            <span class="cm"># exactly as many as commits</span>
<span class="cls">WIN_PROBABILITY</span> <span class="op">=</span> <span class="num">0.999</span>    <span class="cm"># the rest is for bad luck</span>
<span class="cls">MENTOR_SLEEPING</span> <span class="op">=</span> <span class="kw">True</span>          <span class="cm"># always True after 10 PM</span>

<span class="kw">def</span> <span class="fn">charge_robot</span>():
    <span class="kw">if</span> <span class="var">food</span>.<span class="fn">is_empty</span>():
        <span class="kw">raise</span> <span class="cls">CriticalError</span>(<span class="str">"Team can't work without food 🍔"</span>)
    <span class="fn">print</span>(<span class="str">"Robo-9000 is waking up..."</span>)
    <span class="var">spike</span>.<span class="var">motor_a</span>.<span class="fn">run</span>(<span class="var">speed</span><span class="op">=</span><span class="num">100</span>)
    <span class="kw">return</span> <span class="str">"🤖 Ready for battle"</span>

<span class="kw">def</span> <span class="fn">run_mission</span>(<span class="var">mission</span><span class="op">,</span> <span class="var">attempts</span><span class="op">=</span><span class="num">3</span>):
    <span class="kw">for</span> <span class="var">i</span> <span class="kw">in</span> <span class="fn">range</span>(<span class="var">attempts</span>):
        <span class="kw">try</span>:
            <span class="var">robot</span>.<span class="fn">do_something_smart</span>(<span class="var">mission</span>)
            <span class="fn">print</span>(<span class="str">f"Mission {mission} — success! 🎉"</span>)
            <span class="kw">break</span>
        <span class="kw">except</span> <span class="cls">LegoFellOff</span>:
            <span class="fn">print</span>(<span class="str">"They didn't see... hopefully 🙈"</span>)

<span class="kw">def</span> <span class="fn">win_tournament</span>():
    <span class="fn">charge_robot</span>()
    <span class="var">missions</span> <span class="op">=</span> [<span class="num">9</span><span class="op">,</span> <span class="num">10</span><span class="op">,</span> <span class="num">13</span>]
    <span class="kw">for</span> <span class="var">mission</span> <span class="kw">in</span> <span class="var">missions</span>:
        <span class="fn">run_mission</span>(<span class="var">mission</span>)
    <span class="kw">if</span> <span class="var">random</span>.<span class="fn">random</span>() <span class="op">&lt;</span> <span class="cls">WIN_PROBABILITY</span>:
        <span class="kw">return</span> <span class="str">"🏆 Trophy received. Ordering food."</span>
    <span class="kw">else</span>:
        <span class="kw">return</span> <span class="str">"😤"</span>

<span class="fn">print</span>(<span class="fn">win_tournament</span>())`,
    },
    el: {
        nav_home: "Αρχική",
        nav_about: "Σχετικά", nav_code: "Κώδικας", nav_project: "Έργο",
        nav_docs: "Έγγραφα", nav_team: "Ομάδα", nav_location: "Τοποθεσία", nav_contact: "Επικοινωνία",
        nav_models: "3D Μοντέλα",
        nav_more: "Περισσότερα",
        hero_badge: "✨ FLL Ομάδα 2025-26",
        hero_sub: "Μια νεανική ομάδα FIRST LEGO League από μηχανικούς, στοχαστές και ονειροπόλους.",
        hero_btn1: "📄 Έγγραφα", hero_btn2: "💻 Κώδικας",
        stat_members: "Μέλη", stat_seasons: "Σεζόν", stat_dedication: "Αφοσίωση", stat_ideas: "Ιδέες",
        scroll: "Κύλιση", hero_loading: "Φόρτωση 3D μοντέλου...",
        models_title: "3D Αρχείο Ρομπότ", models_desc: "Επιλέξτε ένα μοντέλο από τη λίστα για να εξερευνήσετε την ανάπτυξη του ρομπότ μας.",
        models_loading: "ΦΟΡΤΩΣΗ...", models_main: "Κύριο Ρομπότ", models_run: "Αποστολή: Run",
        btn_reset: "ΕΠΑΝΑΦΟΡΑ", btn_auto_rotate: "ΑΥΤΟΜΑΤΗ ΠΕΡΙΣΤΡΟΦΗ",
        about_label: "Σχετικά", about_title: "Ποιοι Είμαστε",
        about_desc: "Ομάδα επτά νέων που ενώνει το πάθος για μηχανική και καινοτομία.",
        about_robot_title: "Σχεδιασμός Ρομπότ",
        about_robot_desc: "Σχεδιάζουμε, κατασκευάζουμε και προγραμματίζουμε ρομπότ LEGO® βελτιστοποιημένα για ακρίβεια.",
        about_presentation: "Παρουσίαση", about_folder: "Φάκελος",
        about_project_title: "Καινοτόμο Έργο",
        about_project_desc: "Λύνουμε πραγματικά προβλήματα με δημιουργικές ιδέες.",
        about_video: "Βίντεο",
        about_values_title: "Βασικές Αξίες",
        about_values_desc: "Σεβασμός, ανοιχτοσύνη, αντίκτυπος, ένταξη, ομαδική εργασία και διασκέδαση.",
        code_label: "Κώδικας", code_title: "Ο Κώδικας της Νίκης μας",
        code_desc: "Καθαρή Python για SPIKE Prime. Open-source, modular.",
        project_label: "Έργο", project_title: "Το Καινοτόμο μας Έργο",
        project_desc: "Μια λύση που κάνει τον κόσμο γύρω μας καλύτερο μέρος.",
        project_name: "Αυτοματοποιημένο Σύστημα Αφαλάτωσης Αντικειμένων",
        project_problem_label: "Πρόβλημα",
        project_problem: "Η παραδοσιακή αφαλάτωση θαλάσσιων αντικειμένων είναι αργή, χειροκίνητη και ανακριβής.",
        project_solution_label: "Λύση",
        project_solution: "Το ASOA 2.0 αυτοματοποιεί την παρακολούθηση μέσω IoT πλατφόρμας σε πραγματικό χρόνο.",
        project_impact_label: "Αντίκτυπος",
        project_impact: "Μειώνει τον χρόνο συντήρησης κατά μήνες και διασφαλίζει την πολιτιστική κληρονομιά.",
        project_docs: "📄 Τεκμηρίωση", project_site: "🌐 Επισκεφθείτε",
        docs_label: "Έγγραφα", docs_title: "Αρχείο Ομάδας",
        docs_desc: "Όλη η δουλειά μας σε ένα μέρος.",
        doc1: "Χρυσοί Κανόνες Механо", doc2: "Οδηγίες Ρομπότ",
        doc3: "Μηχανικό Σημειωματάριο", doc4: "3D Μοντέλα",
        doc_open: "Άνοιγμα ↗", docs_cta: "📁 Άνοιγμα Google Drive →",
        team_label: "Ομάδα", team_title: "Οι Άνθρωποι πίσω από τη Мехаνο",
        team_desc: "Εννέα μοναδικά μυαλά. Μια κοινή αποστολή.",
        mentor: "Μέντορας", role_mentor: "Μέντορας", role_programmer: "Προγραμματιστής",
        role_tech: "Τεχνικός", role_builder: "Κατασκευαστής", role_3d: "3D Μοντελοποίηση", role_research: "Έρευνα",
        partner_label: "Συνεργάτης", partner_title: "Χτίζουμε το Μέλλον Μαζί",
        partner_desc: "Ευχαριστούμε τον επίσημο συνεργάτη μας για την υποστήριξη και εμπιστοσύνη.",
        location_label: "Τοποθεσία", location_title: "Όπου Γίνεται η Μαγεία",
        location_desc: "Εδώ συναντιόμαστε, σχεδιάζουμε και προγραμματίζουμε το ρομπότ μας.",
        location_school: "Επαγγελματικό Λύκειο Μηχανοηλεκτρονικής",
        location_school_desc: "Η βάση μας — το σχολικό εργαστήριο STEM.",
        location_map_btn: "📍 Εμφάνιση στον Χάρτη",
        contact_label: "Επικοινωνία", contact_title: "Επικοινωνήστε μαζί μας",
        contact_desc: "Έχετε ερώτηση ή ιδέα; Γράψτε μας.",
        contact_email_label: "Email", contact_school_label: "Σχολείο", contact_location_label: "Τοποθεσία",
        contact_school_name: "PGMEE Μπουργκάς", contact_location_city: "Μπουργκάς, Βουλγαρία",
        location_address: "67 Stefan Stambolov St, Μπουργκάς",
        value_teamwork: "Ομαδική εργασία", value_inclusion: "Ένταξη", value_impact: "Αντίκτυπος",
        footer_text: "© 2025 Mehano. Με την επιφύλαξη παντός δικαιώματος.",
        name_boyana: "Μπογιάνα Γεωργίεβα", name_nikola: "Νικόλα Τσάνεφ", name_djefer: "Τζεφέρ Χότζοφ",
        name_boris: "Μπόρις Τσάρεφ", name_deyvid: "Ντέιβιντ Ζελιάζκοφ", name_danail: "Δαναήλ Χίτροφ",
        name_ivan: "Ιβάν Πασόφ", name_dilyan: "Ντιλιάν Γιορντάνοφ", name_kristian: "Κριστιγιάν Πετκόφ",
    },
    zh: {
        nav_home: "首页",
        nav_about: "关于我们", nav_code: "代码", nav_project: "项目",
        nav_docs: "文件", nav_team: "团队", nav_location: "地点", nav_contact: "联系",
        nav_models: "3D模型",
        nav_more: "更多",
        hero_badge: "✨ FLL 团队 2025-26",
        hero_sub: "一支由工程师、思考者和梦想家组成的年轻FIRST LEGO League团队。我们建造机器人，解决问题，留下印记。",
        hero_btn1: "📄 文件", hero_btn2: "💻 代码",
        stat_members: "成员", stat_seasons: "赛季", stat_dedication: "专注度", stat_ideas: "创意",
        scroll: "滚动", hero_loading: "正在加载 3D 模型...",
        models_title: "3D 机器人档案", models_desc: "从列表中选择一个模型来探索我们机器人的开发过程。",
        models_loading: "正在加载...", models_main: "主机器人", models_run: "任务: Run",
        btn_reset: "重置", btn_auto_rotate: "自动旋转",
        about_label: "关于我们", about_title: "我们是谁",
        about_desc: "七位热爱工程和创新的年轻人组成的团队。",
        about_robot_title: "机器人设计",
        about_robot_desc: "我们设计、构建和编程针对精度和速度优化的LEGO®机器人。",
        about_presentation: "演示文稿", about_folder: "文件夹",
        about_project_title: "创新项目",
        about_project_desc: "我们用受赛季主题启发的创意工程想法解决现实问题。",
        about_video: "视频",
        about_values_title: "核心价值观",
        about_values_desc: "尊重、开放、影响、包容、团队合作和乐趣——我们的DNA。",
        code_label: "代码", code_title: "我们的制胜代码",
        code_desc: "适用于SPIKE Prime的纯净Python。开源、模块化、优化。",
        project_label: "项目", project_title: "我们的创新项目",
        project_desc: "让我们周围的世界变得更美好的解决方案。",
        project_name: "自动化文物脱盐系统",
        project_problem_label: "问题",
        project_problem: "传统海洋文物脱盐是一个缓慢、完全手动且不精确的过程。",
        project_solution_label: "解决方案",
        project_solution: "ASOA 2.0通过IoT平台实时自动化监控和管理。",
        project_impact_label: "影响",
        project_impact: "将保护时间缩短数月，确保水下文化遗产的保存。",
        project_docs: "📄 文档", project_site: "🌐 访问网站",
        docs_label: "文件", docs_title: "团队档案",
        docs_desc: "我们所有的工作都在一个地方——开放且可访问。",
        doc1: "Механо黄金规则", doc2: "机器人说明",
        doc3: "工程笔记本", doc4: "3D模型",
        doc_open: "打开 ↗", docs_cta: "📁 打开Google Drive →",
        team_label: "团队", team_title: "Механо背后的人",
        team_desc: "九个独特的头脑。一个共同的使命。",
        mentor: "导师", role_mentor: "导师", role_programmer: "程序员",
        role_tech: "技术员", role_builder: "建造者", role_3d: "3D建模", role_research: "研究",
        partner_label: "合作伙伴", partner_title: "共同建设未来",
        partner_desc: "感谢我们的官方合作伙伴提供的支持、资源和信任。你们的贡献将我们的梦想变为现实。",
        location_label: "地点", location_title: "奇迹发生的地方",
        location_desc: "我们在这里相聚、设计并编程我们的机器人。",
        location_school: "机电与电子专业高中",
        location_school_desc: "我们的基地——学校STEM实验室，每个原型和想法都在这里诞生。",
        location_map_btn: "📍 在地图上查看",
        contact_label: "联系", contact_title: "联系我们",
        contact_desc: "有问题、想法或想成为合作伙伴？写信给我们。",
        contact_email_label: "电子邮件", contact_school_label: "学校", contact_location_label: "位置",
        contact_school_name: "PGMEE 布尔加斯", contact_location_city: "布尔加斯，保加利亚",
        location_address: "Stefan Stambolov 街 67 号，布尔加斯",
        value_teamwork: "团队合作", value_inclusion: "包容性", value_impact: "影响",
        footer_text: "© 2025 Mehano。保留所有权利。",
        name_boyana: "博亚娜·格奥尔基耶娃", name_nikola: "尼古拉·查内夫", name_djefer: "杰费尔·霍乔夫",
        name_boris: "鲍里斯·察列夫", name_deyvid: "戴维·热利亚兹科夫", name_danail: "丹尼尔·希特罗夫",
        name_ivan: "伊万·帕绍夫", name_dilyan: "迪利安·约尔丹诺夫", name_kristian: "克里斯蒂扬·佩特科夫",
    },
    pt: {
        nav_home: "Início",
        nav_about: "Sobre", nav_code: "Código", nav_project: "Projeto",
        nav_docs: "Documentos", nav_team: "Equipa", nav_location: "Local", nav_contact: "Contato",
        nav_models: "Modelos 3D",
        nav_more: "Mais",
        hero_badge: "✨ Equipa FLL 2025-26",
        hero_sub: "Uma jovem equipa da FIRST LEGO League de engenheiros, pensadores e sonhadores. Construímos robôs, resolvemos problemas e deixamos uma marca.",
        hero_btn1: "📄 Documentos", hero_btn2: "💻 Código",
        stat_members: "Membros", stat_seasons: "Temporadas", stat_dedication: "Dedicação", stat_ideas: "Ideias",
        scroll: "Rolar", hero_loading: "A carregar modelo 3D...",
        models_title: "Arquivo 3D do Robô", models_desc: "Selecione um modelo da lista para explorar o desenvolvimento do nosso robô.",
        models_loading: "A CARREGAR...", models_main: "Robô Principal", models_run: "Missão: Run",
        btn_reset: "RESETAR", btn_auto_rotate: "AUTO-ROTAÇÃO",
        about_label: "Sobre Nós", about_title: "Quem Somos",
        about_desc: "Uma equipa de sete jovens unidos pela paixão pela engenharia e inovação.",
        about_robot_title: "Design do Robô",
        about_robot_desc: "Projetamos, construímos e programamos robôs LEGO® otimizados para precisão e velocidade.",
        about_presentation: "Apresentação", about_folder: "Pasta",
        about_project_title: "Projeto Inovador",
        about_project_desc: "Resolvemos problemas reais com ideias criativas inspiradas no tema da temporada.",
        about_video: "Vídeo",
        about_values_title: "Valores Fundamentais",
        about_values_desc: "Respeito, abertura, impacto, inclusão, trabalho em equipa e diversão — o nosso ADN.",
        code_label: "Código", code_title: "O Nosso Código Vencedor",
        code_desc: "Python limpo para SPIKE Prime. Open-source, modular, otimizado.",
        project_label: "Projeto", project_title: "O Nosso Projeto Inovador",
        project_desc: "Uma solução que torna o mundo ao nosso redor um lugar melhor.",
        project_name: "Sistema Automatizado de Dessalinização de Artefactos",
        project_problem_label: "Problema",
        project_problem: "A dessalinização tradicional de artefactos marinhos é um processo lento, manual e impreciso.",
        project_solution_label: "Solução",
        project_solution: "O ASOA 2.0 automatiza a monitorização através de uma plataforma IoT em tempo real.",
        project_impact_label: "Impacto",
        project_impact: "Reduz o tempo de conservação em meses e garante a preservação do património cultural subaquático.",
        project_docs: "📄 Documentação", project_site: "🌐 Ver Site",
        docs_label: "Documentos", docs_title: "Arquivo da Equipa",
        docs_desc: "Todo o nosso trabalho num só lugar — aberto e acessível.",
        doc1: "Regras de Ouro da Механо", doc2: "Instruções do Robô",
        doc3: "Caderno de Engenharia", doc4: "Modelos 3D",
        doc_open: "Abrir ↗", docs_cta: "📁 Abrir Google Drive →",
        team_label: "Equipa", team_title: "As Pessoas por Trás da Механо",
        team_desc: "Nove mentes únicas. Uma missão comum.",
        mentor: "Mentor", role_mentor: "Mentor", role_programmer: "Programador",
        role_tech: "Técnico", role_builder: "Construtor", role_3d: "Modelação 3D", role_research: "Pesquisa",
        partner_label: "Parceiro", partner_title: "Construindo o Futuro Juntos",
        partner_desc: "Agradecemos ao nosso parceiro oficial pelo apoio, recursos e confiança. A vossa contribuição transforma os nossos sonhos em realidade.",
        location_label: "Local", location_title: "Onde Acontece a Magia",
        location_desc: "Aqui nos reunimos, projetamos e programamos o nosso robô.",
        location_school: "Escola Secundária de Mecatrónica e Eletrónica",
        location_school_desc: "A nossa base — o laboratório STEM da escola, onde nasce cada protótipo e ideia.",
        location_map_btn: "📍 Ver no Mapa",
        contact_label: "Contato", contact_title: "Entre em Contacto",
        contact_desc: "Tem uma pergunta, idea ou quer ser parceiro? Escreva-nos.",
        contact_email_label: "Email", contact_school_label: "Escola", contact_location_label: "Localização",
        contact_school_name: "PGMEE Burgas", contact_location_city: "Burgas, Bulgária",
        location_address: "Rua Stefan Stambolov 67, Burgas",
        value_teamwork: "Trabalho em equipe", value_inclusion: "Inclusão", value_impact: "Impacto",
        footer_text: "© 2025 Mehano. Todos os direitos reservados.",
        name_boyana: "Boyana Georgieva", name_nikola: "Nikola Chanev", name_djefer: "Djefer Hodzhov",
        name_boris: "Boris Tsarev", name_deyvid: "Deyvid Zhelyazkov", name_danail: "Danail Hitrov",
        name_ivan: "Ivan Pashov", name_dilyan: "Dilyan Yordanov", name_kristian: "Kristiyan Petkov",
    },
    es: {
        nav_home: "Inicio",
        nav_about: "Nosotros", nav_code: "Código", nav_project: "Proyecto",
        nav_docs: "Documentos", nav_team: "Equipo", nav_location: "Lugar", nav_contact: "Contacto",
        nav_models: "Modelos 3D",
        nav_more: "Más",
        hero_badge: "✨ Equipo FLL 2025-26",
        hero_sub: "Un joven equipo de la FIRST LEGO League formado por ingenieros, pensadores y soñadores. Construimos robots, resolvemos problemas y dejamos huella.",
        hero_btn1: "📄 Documentos", hero_btn2: "💻 Código",
        stat_members: "Miembros", stat_seasons: "Temporadas", stat_dedication: "Dedicación", stat_ideas: "Ideas",
        scroll: "Desplazar", hero_loading: "Cargando modelo 3D...",
        models_title: "Archivo 3D del Robot", models_desc: "Selecciona un modelo de la lista para explorar el desarrollo de nuestro robot.",
        models_loading: "CARGANDO...", models_main: "Robot Principal", models_run: "Misión: Run",
        btn_reset: "RESTABLECER", btn_auto_rotate: "AUTO-ROTACIÓN",
        about_label: "Sobre Nosotros", about_title: "Quiénes Somos",
        about_desc: "Un equipo de siete jóvenes unidos por la pasión por la ingeniería y la innovación.",
        about_robot_title: "Diseño del Robot",
        about_robot_desc: "Diseñamos, construimos y programamos robots LEGO® optimizados para precisión y velocidad.",
        about_presentation: "Presentación", about_folder: "Carpeta",
        about_project_title: "Proyecto Innovador",
        about_project_desc: "Resolvemos problemas reales con ideas creativas inspiradas en el tema de la temporada.",
        about_video: "Video",
        about_values_title: "Valores Fundamentales",
        about_values_desc: "Respecto, apertura, impacto, inclusión, trabajo en equipo y diversión — nuestro ADN.",
        code_label: "Código", code_title: "Nuestro Código Ganador",
        code_desc: "Python limpio para SPIKE Prime. Open-source, modular, optimizado.",
        project_label: "Proyecto", project_title: "Nuestro Proyecto Innovador",
        project_desc: "Una solución que hace del mundo un lugar mejor.",
        project_name: "Sistema Automatizado de Desalinización de Artefactos",
        project_problem_label: "Problema",
        project_problem: "La desalinización tradicional de artefactos marinos es lenta, manual e imprecisa.",
        project_solution_label: "Solución",
        project_solution: "ASOA 2.0 automatiza el monitoreo a través de una plataforma IoT en tiempo real.",
        project_impact_label: "Impacto",
        project_impact: "Reduce el tiempo de conservación en meses y garantiza la preservación del patrimonio cultural subacuático.",
        project_docs: "📄 Documentación", project_site: "🌐 Ver Sitio",
        docs_label: "Documentos", docs_title: "Archivo del Equipo",
        docs_desc: "Todo nuestro trabajo en un solo lugar — abierto y accesible.",
        doc1: "Reglas de Oro de Механо", doc2: "Instrucciones del Robot",
        doc3: "Cuaderno de Ingeniería", doc4: "Modelos 3D",
        doc_open: "Abrir ↗", docs_cta: "📁 Abrir Google Drive →",
        team_label: "Equipo", team_title: "Las Personas detrás de Механо",
        team_desc: "Nueve mentes únicas. Una misión común.",
        mentor: "Mentor", role_mentor: "Mentor", role_programmer: "Programador",
        role_tech: "Técnico", role_builder: "Constructor", role_3d: "Modelado 3D", role_research: "Investigación",
        partner_label: "Socio", partner_title: "Construyendo el Futuro Juntos",
        partner_desc: "Agradecemos a nuestro socio oficial su apoyo, recursos y confianza. Su contribución convierte nuestros sueños en realidad.",
        location_label: "Lugar", location_title: "Donde Ocurre la Magia",
        location_desc: "Aquí nos reunimos, diseñamos y programamos nuestro robot.",
        location_school: "Instituto Profesional de Mecatrónica y Electrónica",
        location_school_desc: "Nuestra base — el laboratorio STEM escolar donde nace cada prototipo e idea.",
        location_map_btn: "📍 Ver en el Mapa",
        contact_label: "Contacto", contact_title: "Ponte en Contacto",
        contact_desc: "¿Tienes una pregunta, idea o quieres ser socio? Escríbenos.",
        contact_email_label: "Email", contact_school_label: "Escuela", contact_location_label: "Ubicación",
        contact_school_name: "PGMEE Burgas", contact_location_city: "Burgas, Bulgaria",
        location_address: "Calle Stefan Stambolov 67, Burgas",
        value_teamwork: "Trabajo en equipo", value_inclusion: "Inclusión", value_impact: "Impacto",
        footer_text: "© 2025 Mehano. Todos los derechos reservados.",
        name_boyana: "Boyana Georgieva", name_nikola: "Nikola Chanev", name_djefer: "Djefer Hodzhov",
        name_boris: "Boris Tsarev", name_deyvid: "Deyvid Zhelyazkov", name_danail: "Danail Hitrov",
        name_ivan: "Ivan Pashov", name_dilyan: "Dilyan Yordanov", name_kristian: "Kristiyan Petkov",
    },
    ja: {
        nav_home: "ホーム",
        nav_about: "私たちについて", nav_code: "コード", nav_project: "プロジェクト",
        nav_docs: "ドキュメント", nav_team: "チーム", nav_location: "場所", nav_contact: "連絡",
        nav_models: "3Dモデル",
        nav_more: "もっと",
        hero_badge: "✨ FLL チーム 2025-26",
        hero_sub: "エンジニア、思想家、夢想家からなる若きFIRST LEGOリーグチーム。ロボットを作り、問題を解決し、足跡を残す。",
        hero_btn1: "📄 ドキュメント", hero_btn2: "💻 コード",
        stat_members: "メンバー", stat_seasons: "シーズン", stat_dedication: "献身度", stat_ideas: "アイデア",
        scroll: "スクロール", hero_loading: "3Dモデルを読み込み中...",
        models_title: "3Dロボットアーカイブ", models_desc: "リストからモデルを選択して、ロボットの開発過程を確認してください。",
        models_loading: "読み込み中...", models_main: "メインロボット", models_run: "ミッション: Run",
        btn_reset: "リセット", btn_auto_rotate: "自動回転",
        about_label: "私たちについて", about_title: "私たちは誰",
        about_desc: "エンジニアリングとイノベーションへの情熱で結ばれた7人の若者のチーム。",
        about_robot_title: "ロボットデザイン",
        about_robot_desc: "精度と速度のために最適化されたLEGO®ロボットを設計、構築、プログラムします。",
        about_presentation: "プレゼンテーション", about_folder: "フォルダ",
        about_project_title: "イノベーションプロジェクト",
        about_project_desc: "シーズンのテーマからインスピレーションを受けた創造的なアイデアで実際の問題を解決します。",
        about_video: "動画",
        about_values_title: "コアバリュー",
        about_values_desc: "尊重、開放性、影響力、包容力、チームワーク、そして楽しみ — 私たちのDNA。",
        code_label: "コード", code_title: "私たちの勝利のコード",
        code_desc: "SPIKE Prime用のクリーンなPython。オープンソース、モジュラー、最適化済み。",
        project_label: "プロジェクト", project_title: "私たちのイノベーションプロジェクト",
        project_desc: "世界をより良い場所にするソリューション。",
        project_name: "自動化された遺物脱塩システム",
        project_problem_label: "問題",
        project_problem: "海洋遺物の従来の脱塩は遅く、完全に手動で不正確なプロセスです。",
        project_solution_label: "ソリューション",
        project_solution: "ASOA 2.0はIoTプラットフォームを通じてリアルタイムで監視を自動化します。",
        project_impact_label: "影響",
        project_impact: "保存時間を数ヶ月短縮し、水中文化遺産の保存を保証します。",
        project_docs: "📄 ドキュメント", project_site: "🌐 サイトを見る",
        docs_label: "ドキュメント", docs_title: "チームアーカイブ",
        docs_desc: "私たちのすべての作業が一箇所に — オープンでアクセス可能。",
        doc1: "Механоのゴールデンルール", doc2: "ロボット指示",
        doc3: "エンジニアリングノートブック", doc4: "3Dモデル",
        doc_open: "開く ↗", docs_cta: "📁 Google Driveを開く →",
        team_label: "チーム", team_title: "Механоの人々",
        team_desc: "9つのユニークな心。一つの共通の使命。",
        mentor: "メンター", role_mentor: "メンター", role_programmer: "プログラマー",
        role_tech: "テクニシャン", role_builder: "ビルダー", role_3d: "3Dモデリング", role_research: "リサーチ",
        partner_label: "パートナー", partner_title: "共に未来を築く",
        partner_desc: "公式パートナーのサポート、リソース、信頼に感謝します。あなたの貢献が私たちの夢を現実に変えます。",
        location_label: "場所", location_title: "魔法が起こる場所",
        location_desc: "ここで集まり、設計し、ロボットをプログラムします。",
        location_school: "メカトロニクス・エレクトロニクス職業高校",
        location_school_desc: "私たちのベース — すべてのプロトタイプとアイデアが生まれる学校のSTEMラボ。",
        location_map_btn: "📍 地図で見る",
        contact_label: "連絡", contact_title: "お問い合わせ",
        contact_desc: "質問、アイデア、またはパートナーになりたいですか？ご連絡ください。",
        contact_email_label: "メール", contact_school_label: "学校", contact_location_label: "場所",
        contact_school_name: "PGMEE ブルガス", contact_location_city: "ブルガス、ブルガリア",
        location_address: "ブルガス、ステファン・スタンボロフ通り 67",
        value_teamwork: "チームワーク", value_inclusion: "包含", value_impact: "インパクト",
        footer_text: "© 2025 Mehano. 無断複写・転載を禁じます。",
        name_boyana: "ボヤナ・ゲオルギエワ", name_nikola: "ニコラ・チャネフ", name_djefer: "ジェフェル・ホジョフ",
        name_boris: "ボリス・ツァレフ", name_deyvid: "デイビッド・ゼリャズコフ", name_danail: "ダナイル・ヒトロフ",
        name_ivan: "イヴァン・パショフ", name_dilyan: "ディリャン・ヨルダノフ", name_kristian: "クリスティヤン・ペトコフ",
    }
};

let currentLang = localStorage.getItem('mehano_lang') || 'en';

function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('mehano_lang', lang);
    const t = i18n[lang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key]) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.dataset.i18nHtml;
        if (t[key]) el.innerHTML = t[key];
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update lang selector active states
    document.querySelectorAll('.lang-item').forEach(item => {
        item.classList.toggle('active', item.dataset.lang === lang);
    });
}

// Initial application
document.addEventListener('DOMContentLoaded', () => {
    applyLang(currentLang);
});

// Lang selector logic
document.querySelectorAll('.lang-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.stopPropagation();
        applyLang(item.dataset.lang);
    });
});

// Hamburger
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            hamburger.classList.remove('open');
            mobileMenu.classList.remove('open');
        });
    });
}

// Navbar scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 10);
    }
});

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80);
        }
    });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

// ─── FLOATING LANGUAGE SWITCHER FAB ───
function initLangFab() {
    const fabBtn = document.getElementById('langFabBtn');
    const fabPanel = document.getElementById('langFabPanel');
    if (!fabBtn || !fabPanel) return;

    // Toggle panel
    fabBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        fabPanel.classList.toggle('open');
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('#langFab')) {
            fabPanel.classList.remove('open');
        }
    });

    // Handle flag clicks
    fabPanel.querySelectorAll('.lang-fab-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const lang = item.dataset.lang;
            applyLang(lang);

            // Update active state in FAB
            fabPanel.querySelectorAll('.lang-fab-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            // Also sync the inline selectors in nav
            document.querySelectorAll('.lang-item').forEach(i => {
                i.classList.toggle('active', i.dataset.lang === lang);
            });

            fabPanel.classList.remove('open');
        });
    });

    // Sync FAB active state when inline selector is used
    document.querySelectorAll('.lang-item').forEach(item => {
        item.addEventListener('click', () => {
            const lang = item.dataset.lang;
            fabPanel.querySelectorAll('.lang-fab-item').forEach(i => {
                i.classList.toggle('active', i.dataset.lang === lang);
            });
        });
    });

    // Set initial active based on current lang
    const initLang = localStorage.getItem('lang') || 'en';
    fabPanel.querySelectorAll('.lang-fab-item').forEach(i => {
        i.classList.toggle('active', i.dataset.lang === initLang);
    });
}

// Ensure both initial load and DOM ready are handled
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLangFab);
} else {
    initLangFab();
}
