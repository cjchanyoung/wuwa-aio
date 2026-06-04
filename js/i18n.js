// WuWa AIO i18n Localization Framework (EN/KO/JA/ZH - Pattern B Split-file Loader)
(function () {
  // Inject style immediately to prevent Flash of Untranslated Content (FOUTC)
  (function injectLoadingStyle() {
    const style = document.createElement('style');
    style.id = 'wuwa-i18n-loading-style';
    style.innerHTML = `
      html {
        background-color: #0a080f !important;
      }
      body {
        opacity: 0 !important;
      }
      body.wuwa-ready {
        opacity: 1 !important;
        transition: opacity 0.12s ease-in-out !important;
      }
    `;
    const target = document.head || document.documentElement;
    if (target) {
      target.appendChild(style);
    }
  })();

  // Embedded English dictionary (acts as the robust fallback if JSON fetching fails or language is not fully translated)
  const embeddedFallbackEN = {
    // Navigation
    nav_characters: "Characters",
    nav_echoes: "Echoes",
    nav_weapons: "Weapons",
    nav_quickswap: "Quick-Swap",
    nav_calculation: "Calculation",
    nav_database: "Database",
    nav_build: "Build",
    nav_guide: "Guide",
    nav_other: "Other",
    menu_characters: "Characters",
    menu_weapons: "Weapons",
    menu_echoes: "Echoes",
    menu_build_char_echo: "Resonator",
    menu_build_rotation: "Rotation",
    menu_build_calculation: "Calculation",
    menu_guide_rotation: "Rotation",
    menu_guide_toa: "ToA",
    menu_guide_whiwa: "WhiWa",
    menu_guide_metrix: "Metrix",
    menu_other_sites: "WuWa Sites",
    menu_other_about: "About",
    sub_logo: "All-in-One Database",

    // Landing Page
    landing_title_prefix: "WUWA",
    landing_title_suffix: ".AIO",
    landing_headline: "Wuthering Waves All-in-One Database",
    landing_subtitle: "Real-time character builds, Echo sets, weapons, and rotation tools powered by community spreadsheets.",
    landing_version_badge: "Wuthering Waves 1.4+ Ready",
    landing_stat_resonators: "Resonators",
    landing_stat_serverless: "Serverless",
    landing_stat_modules: "Modules",
    landing_hero_btn_db: "Resonator Builds Database",
    landing_hero_btn_features: "Explore Features",
    landing_card_char_title: "Resonator Archive",
    landing_card_char_desc: "Detailed build guides, skill priorities, and optimal team comps.",
    landing_card_char_btn: "Explore Resonators",
    landing_card_echo_title: "Echo Database",
    landing_card_echo_desc: "Detailed stats, set effects, and optimal farming setups.",
    landing_card_echo_btn: "Explore Echoes",
    landing_card_weapon_title: "Weapon Archive",
    landing_card_weapon_desc: "Base stats, passive effects, and resonator recommendations.",
    landing_card_weapon_btn: "Explore Weapons",
    landing_card_rotation_title: "Quick-Swap Rotations",
    landing_card_rotation_desc: "Visual timeline scheduler for optimal rotation combos.",
    landing_card_rotation_btn: "Explore Rotations",
    landing_card_calc_title: "Damage Calculator",
    landing_card_calc_desc: "Optimize your resonator stats and damage multipliers.",
    landing_card_calc_btn: "Explore Calculator",
    landing_features_title: "Explore All Guide Modules",
    landing_features_desc: "Select one of our specialized guides databases to fine-tune your resonators and speedrun tactical hologram challenges.",

    // Landing How it works
    landing_how_title: "How WUWA.AIO Works",
    landing_how_desc: "By utilizing a zero-cost serverless architecture, we pull live crowd-sourced guide submissions directly from published Google Sheets to compile a fast, responsive frontend client.",
    landing_how_pipeline: "Crowd-sourced Synchronization Pipeline",
    landing_how_step1_badge: "Step 1: Input",
    landing_how_step1_title: "Player Submissions",
    landing_how_step1_desc: "Resonator builders submit builds via our custom form or directly to our public spreadsheet queue.",
    landing_how_step1_footer: "Google Forms Log",
    landing_how_step2_badge: "Step 2: Database",
    landing_how_step2_title: "Spreadsheet Sync",
    landing_how_step2_desc: "Google Spreadsheet catalogs user rows and exposes a fast, cached web CSV endpoint.",
    landing_how_step2_footer: "Published CSV Export",
    landing_how_step3_badge: "Step 3: Client",
    landing_how_step3_title: "Frontend Hydration",
    landing_how_step3_desc: "Our custom Javascript parser processes, sanitizes, and renders builds instantly on the characters grid.",
    landing_how_step3_footer: "Live CSV Hydrator",

    // Characters list page
    char_list_title: "Resonator Guides Database",
    char_list_subtitle: "Filter and inspect detailed character builds synced in real-time.",
    char_search_placeholder: "Search Resonator...",
    char_filter_all: "All",
    char_filter_5: "5★",
    char_filter_4: "4★",
    char_filter_attribute: "Attribute:",
    char_filter_weapon: "Weapon:",
    attr_spectro: "Spectro",
    attr_fusion: "Fusion",
    attr_electro: "Electro",
    attr_aero: "Aero",
    attr_havoc: "Havoc",
    attr_glacio: "Glacio",
    weapon_broadblade: "Broadblade",
    weapon_sword: "Sword",
    weapon_pistol: "Pistols",
    weapon_gauntlet: "Gauntlets",
    weapon_rectifier: "Rectifiers",
    char_card_view: "View Guide Details",

    // Weapons Page
    weapons_tab_title: "Weapons Database & Tiers - WuWa AIO",
    weapons_title: "Weapon Archive",
    weapons_subtitle: "Detailed weapon stats, active effects, and character compatibility charts.",
    weapons_search_placeholder: "Search Weapon...",
    weapons_header_title: "Weapons Scaling Database",
    weapons_header_subtitle: "Filter and inspect standard weapon scaling stats, secondary values, and skill modifiers.",
    weapons_filter_all: "All Weapons",
    weapons_filter_broadblade: "Broadblades",
    weapons_filter_sword: "Swords",
    weapons_filter_rectifier: "Rectifiers",
    weapons_filter_pistols: "Pistols",
    weapon_stat_secondary: "Secondary Stat:",
    weapon_stat_signature: "Signature For:",
    weapon_stat_recommended: "Recommended For:",
    weapon_ages_of_harvest_name: "Ages of Harvest",
    weapon_ages_of_harvest_desc: "Increases Attribute DMG by 12%. When using Intro Skill or Resonance Skill, gain a stacking Resonance Skill DMG boost of up to 48%.",
    weapon_stringmaster_name: "Stringmaster",
    weapon_stringmaster_desc: "Increases Crit Rate and boosts Resonance Attribute DMG by 12%. Off-field Resonance Skill hits increase ATK by 12%.",
    weapon_blazing_brilliance_name: "Blazing Brilliance",
    weapon_blazing_brilliance_desc: "Provides massive Crit DMG. Increases ATK by 12%. Casting Resonance Skill grants standard attacks and skill damage stacks.",
    weapon_static_mist_name: "Static Mist",
    weapon_static_mist_desc: "Grants Crit Rate and increases Energy Regen by 12%. Upon switching out, the incoming Resonator gains 10% ATK.",
    weapon_variation_name: "Variation",
    weapon_variation_desc: "Grants high Energy Regen. Restores 8 Concerto Energy upon casting Resonance Skill, boosting rotation speeds.",
    weapon_undying_flame_name: "Undying Flame",
    weapon_undying_flame_desc: "Increases Resonance Skill DMG by 20% for 15s upon casting Intro Skill. Fully utilizes Chixia's rapid-fire skill ticks.",
    weapon_type_broadblade_main: "Broadblade • Main DPS",
    weapon_type_rectifier_sub: "Rectifier • Sub DPS / Amp",
    weapon_type_sword_main: "Sword • Main DPS",
    weapon_type_pistols_sub: "Pistols • Sub DPS / Amp",
    weapon_type_rectifier_support: "Rectifier • Support",
    weapon_type_pistols_main: "Pistols • Main DPS",
    weapon_val_crit_rate_24_3: "24.3% Crit Rate",
    weapon_val_crit_rate_36_0: "36.0% Crit Rate",
    weapon_val_crit_dmg_48_6: "48.6% Crit DMG",
    weapon_val_er_51_8: "51.8% Energy Regen",
    weapon_val_atk_20_2: "20.2% ATK%",
    weapon_rec_jinhsi: "Jinhsi",
    weapon_rec_yinlin: "Yinlin",
    weapon_rec_changli: "Changli",
    weapon_rec_chixia_high: "Chixia (High Tier)",
    weapon_rec_shorekeeper_verina: "Shorekeeper, Verina",
    weapon_rec_chixia: "Chixia",
    weapon_val_atk_587: "587 ATK",
    weapon_val_atk_500: "500 ATK",
    weapon_val_atk_337: "337 ATK",
    weapon_val_atk_412: "412 ATK",

    // Echoes Page
    echoes_title: "Echo Database",
    echoes_subtitle: "Browse all Sonata Effects, Echo stats, and primary farming drop targets.",
    echoes_search_placeholder: "Search Sonata / Echo...",
    echoes_header_title: "Sonata Echo Sets Database",
    echoes_header_subtitle: "Filter and inspect standard set compositions, substat ranges, and recommended farming nodes.",
    echoes_set_2pc: "2-Piece Effect",
    echoes_set_5pc: "5-Piece Effect",
    echoes_best_resonators: "Best Resonators:",
    echo_celestial_light_name: "Celestial Light",
    echo_celestial_light_type: "Spectro Set",
    echo_celestial_light_2pc: "Spectro DMG +10%",
    echo_celestial_light_5pc: "Upon using Intro Skill, increases Spectro DMG by 30% for 15s.",
    echo_void_thunder_name: "Void Thunder",
    echo_void_thunder_type: "Electro Set",
    echo_void_thunder_2pc: "Electro DMG +10%",
    echo_void_thunder_5pc: "Upon using Heavy Attack or Resonance Skill, increases Electro DMG by 15% (stacks up to 2 times, each stack lasts 15s).",
    echo_molten_rift_name: "Molten Rift",
    echo_molten_rift_type: "Fusion Set",
    echo_molten_rift_2pc: "Fusion DMG +10%",
    echo_molten_rift_5pc: "Upon using Resonance Skill, increases Fusion DMG by 30% for 15s.",
    echo_sierra_gale_name: "Sierra Gale",
    echo_sierra_gale_type: "Aero Set",
    echo_sierra_gale_2pc: "Aero DMG +10%",
    echo_sierra_gale_5pc: "Upon using Intro Skill, increases Aero DMG by 30% for 15s.",
    echo_sun_sinking_havoc_name: "Sun-sinking Havoc",
    echo_sun_sinking_havoc_type: "Havoc Set",
    echo_sun_sinking_havoc_2pc: "Havoc DMG +10%",
    echo_sun_sinking_havoc_5pc: "Increases Havoc DMG by 7.5% upon using Basic or Heavy attacks. Stacks up to 4 times, lasts 15s.",
    echo_rejuvenating_glow_name: "Rejuvenating Glow",
    echo_rejuvenating_glow_type: "Support Set",
    echo_rejuvenating_glow_2pc: "Healing Bonus +10%",
    echo_rejuvenating_glow_5pc: "Upon healing allies, increases ATK of all team members by 15% for 30s.",
    echo_tuning_guide_title: "Substat Tuning Priority Guide",
    echo_tuning_rules_title: "Tuning Guidelines",
    echo_tuning_rules_desc1: "Echos must be leveled to multiples of 5 (5, 10, 15, 20, 25) to unlock Substat slots. Tuning requires <span class=\"text-purple-400\">Premium Tuners</span> relative to the Echo rarity.",
    echo_tuning_rules_desc2: "Once a substat is tuned, it cannot be rerolled. If you roll low-value stats (e.g. DEF, HP on a main carry), it is usually optimal to feed the Echo into another raw base Echo for 80% exp return.",
    echo_tuning_values_title: "Substat Values (5★ Echos)",
    echo_tuning_crit_rate: "Crit Rate:",
    echo_tuning_crit_dmg: "Crit DMG:",
    echo_tuning_skill_dmg: "Resonance Skill/Lib DMG:",
    echo_tuning_energy_regen: "Energy Regeneration:",

    // Calculation Page
    calc_title: "Resonator Damage Multiplier Calculator",
    calc_subtitle: "Simulate and optimize your damage output based on active builds.",
    calc_header_title: "Tactical Damage Calculator",
    calc_header_subtitle: "Simulate real-time combat stats, average crit distributions, and target defense values.",
    calc_section_inputs: "Combat Parameters",
    calc_label_preset: "Character Presets (CSV)",
    calc_option_custom: "-- Select Preset (Custom) --",
    calc_label_atk: "Total ATK",
    calc_label_multiplier: "Skill Multiplier (%)",
    calc_label_crit_rate: "Crit Rate (%)",
    calc_label_crit_dmg: "Crit DMG (%)",
    calc_label_dmg_bonus: "Element DMG Bonus (%)",
    calc_label_skill_bonus: "Skill/Ult DMG Bonus (%)",
    calc_label_def_shred: "Enemy DEF Shred (%)",
    calc_label_res: "Enemy Resistance (%)",
    calc_section_outputs: "Expected Outputs",
    calc_label_non_crit: "Non-Crit Hit",
    calc_label_crit: "Critical Hit",
    calc_label_average: "Average Expected Damage",
    calc_note: "Note: Calculations assume a standard Level 90 target (DEF multiplier &approx; 0.5 before shred) and 10% base elemental resistance.",

    // Quick-Swap Page
    qs_title: "Quick-Swap Rotation Timelines",
    qs_subtitle: "Optimize your combat execution with precise row-by-row swap-cancel combos.",
    qs_btn_back: "Back to Archive",
    qs_header_title: "Quick-Swap Rotation Guides",
    qs_header_subtitle: "Optimize concerto energy transitions, coordinate Outro buffs, and master frame-perfect animation cancels.",
    qs_adv_mechanic: "Advanced Mechanic",
    qs_mechanic_title: "What is Animation Swap-Canceling?",
    qs_mechanic_desc1: "In Wuthering Waves, certain skills, heavy attacks, or Resonance Liberations have long cast animations. During these animations, you can <span class=\"text-white font-semibold\">swap to another resonator immediately</span>.",
    qs_mechanic_desc2: "The previous resonator will stay on-field to complete their animation, allowing your new resonator to start attacking simultaneously. This effectively doubles your DPS during burst windows.",
    qs_prime_title: "Prime Swap-Cancel Windows",
    qs_prime_yinlin: "Resonance Skill (Chameleon Bite) & Forte Heavy Attack (Chameleon Freak).",
    qs_prime_jinhsi: "Resonance Skill (Illuminous Epiphany dragon laser) cast.",
    qs_prime_changli: "Forte Heavy Attack (Flaming Sacrifice) rising sweep.",
    qs_std_timeline_title: "Standard Premium Team Rotation Timeline",
    qs_node1_time: "0.0s - 4.0s",
    qs_node1_title: "Verina setup",
    qs_node1_desc: "Basic Attacks, Mid-air Attacks to build Concerto energy. Casts Bell-Borne Geochelone Echo skill for shield, then casts Outro to buff the next unit.",
    qs_node2_time: "4.0s - 10.0s",
    qs_node2_title: "Yinlin Coordination",
    qs_node2_desc: "Enters via Intro. Casts Skill 1, basic attack string to fill Forte Gauge. Casts Resonance Liberation and Forte Heavy. Swaps out immediately during heavy attack animation.",
    qs_node3_time: "10.0s - 18.0s",
    qs_node3_title: "Jinhsi Nuke Window",
    qs_node3_desc: "Enters with full buffs. Basic attack sequence to enter Incarnation state. Yinlin's off-field coordinates stack Jinhsi's Forte. Nukes with dragon laser and swap-cancels out.",
    qs_db_title: "Rotation Guides Archive",
    qs_db_subtitle: "Select a team rotation below to view the detailed frame-by-frame swap timeline.",
    qs_search_placeholder: "Search team or resonator...",
    qs_register_title: "Register Rotation",
    qs_register_desc: "Add your own Google Sheet URL to register your custom rotation guide to the local database. The sheet must follow our row-by-row step format.",
    qs_sync_status: "Sync Status",
    qs_sheet_label: "Spreadsheet Link / ID",
    qs_sheet_placeholder: "Paste sharing URL, web publish URL, or ID...",
    qs_register_btn: "Register",
    qs_register_note: "Note: Ensure your sheet is shared with \"Anyone with link can view\" or published as CSV.",
    qs_format_guide_title: "Spreadsheet Formatting Guide",
    qs_format_guide_desc: "To register your own quick-swap rotation timeline, format your Google Sheet exactly like this template. The page will dynamically parse the rows and draw a parallel timeline showing animation swap-cancels.",
    qs_row1_title: "Row 1 (Metadata & Specs)",
    qs_row2_title: "Row 2+ (Rotation Steps)",
    qs_row_warning: "If two actions are in the same row (e.g. Row 4 above, both Resonator 2 and 3 have actions), they will render side-by-side on the timeline, representing an active swap-cancel window!",
    qs_view_guide: "View Guide",
    qs_contributor_by: "Contributed by",

    // Quick-swap Detail Page
    qsd_specs_title: "Resonator Specifications",
    qsd_weapon: "Weapon",
    qsd_echo: "Echo",
    qsd_steps_title: "Rotation Steps Timeline",
    qsd_swap_cancel: "Swap Cancel",
    qsd_error_title: "Failed to Load Rotation",
    qsd_error_desc: "Something went wrong while retrieving the spreadsheet data.",
    qsd_error_btn: "Go Back",
    qsd_premium_badge: "PREMIUM GUIDE",
    qsd_custom_badge: "CUSTOM SHEET",
    qsd_source_btn: "View Raw Google Sheet",
    qsd_contributor_prefix: "Contributed by",
    qsd_step_execution: "Step Execution",
    qsd_loading_text: "Loading Team Name...",
    qsd_swap_cancel_window_title: "<i class=\"fa-solid fa-bolt\"></i> Swap Cancel Window:",
    qsd_swap_cancel_window_desc: "Connected lines represent simultaneous action executions.",

    // Footer
    footer_disclaimer: "© 2026 WuWa AIO Guides. This is a fan-made database tool. Wuthering Waves, game assets, and content are trademarks of Kuro Games.",

    // Detail Page Elements
    detail_btn_back: "Back to List",
    detail_btn_configure: "Configure My Build",
    detail_weapon_title: "Weapon Recommendations",
    detail_echo_title: "Echo Setup & Substats",
    detail_best_set: "Best Set Sonata",
    detail_main_echo: "Main Slot Echo",
    detail_cost_4: "4-Cost Echo",
    detail_cost_3: "3-Cost Echos",
    detail_cost_1: "1-Cost Echos",
    detail_substat_priority: "Substat Leveling Priority",
    detail_stat_priority: "Stat priorities",
    detail_skill_priority: "Skill Priority",
    detail_teams_title: "Recommended Teams",
    detail_resonator: "Resonator",
    cost_label: "COST",

    // Dynamic UI labels (added for Pattern B cleanup)
    resonator_label: "Resonator",
    build_guide_label: "Build Guide",
    echo_label: "Sonata:",
    weapon_label: "Weapon:",
    view_guide_label: "View Guide Details",
    best_resonators_label: "Best Resonators:",
    swap_cancel_label: "Swap Cancel",
    step_execution_label: "Step Execution",
    qsd_premium_badge: "Premium Guide",
    qsd_custom_badge: "Custom Sheet",
    build_toggle_title: "Custom Build Mode",
    build_toggle_desc: "Configure your own equipment, levels, and stats to export as a build config.",
    build_btn_start: "Configure My Build",
    build_btn_cancel: "Cancel Build Mode",
    build_stat_base_atk: "Base ATK",
    build_stat_secondary: "Secondary Stat",
    build_stat_description: "Description",
    build_save_btn: "Save Build",
    build_download_btn: "Download JSON",
    build_import_btn: "Import JSON",
    build_load_placeholder: "Select Saved Build...",
    build_name_placeholder: "Enter Build Name...",
    build_header_title: "Resonator Builder",
    build_header_subtitle: "Build custom resonator configurations, adjust substats, and test simulated damage outputs in real-time."
  };

  // Safe localStorage helper
  function getStorageItem(key, fallback) {
    try {
      return localStorage.getItem(key) || fallback;
    } catch (e) {
      console.warn("Storage access denied. Falling back to default language.");
      return fallback;
    }
  }

  function setStorageItem(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      // Ignore security errors in strict local file context
    }
  }

  // Get lang from URL parameter if present
  function getUrlParameter(name) {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(name);
    } catch (e) {
      return null;
    }
  }

  // Detect relative path prefix to the root locales directory
  function getLocalesPathPrefix() {
    const script = document.querySelector('script[src*="i18n.js"]');
    if (script) {
      const src = script.getAttribute('src');
      return src.replace('js/i18n.js', 'locales/');
    }
    return '../locales/';
  }

  let isPageShown = false;
  function showPage() {
    if (isPageShown) return;
    isPageShown = true;

    const reveal = () => {
      if (document.body) {
        document.body.classList.add('wuwa-ready');
      } else {
        document.addEventListener('DOMContentLoaded', () => {
          document.body.classList.add('wuwa-ready');
        });
      }
    };
    reveal();
  }

  let activeTranslations = {};
  const modules = ['common', 'characters', 'weapons', 'echoes', 'calculation', 'quick-swap'];

  // Load translations for the active language from JSON files
  async function loadTranslations(lang) {
    const prefix = getLocalesPathPrefix();
    const fetchedData = {};

    try {
      const fetchPromises = modules.map(async (mod) => {
        try {
          const res = await fetch(`${prefix}${lang}/${mod}.json`);
          if (res.ok) {
            fetchedData[mod] = await res.json();
          } else {
            console.warn(`Locale file not found: ${lang}/${mod}.json`);
          }
        } catch (e) {
          // Swallow fetch/CORS errors silently. The system will auto fall back to English embedded dictionary.
        }
      });

      await Promise.all(fetchPromises);
    } catch (e) {
      console.warn("Failed to complete locale fetches.", e);
    }

    // Merge fetched modules into activeTranslations
    activeTranslations = {};
    modules.forEach(mod => {
      if (fetchedData[mod]) {
        Object.assign(activeTranslations, fetchedData[mod]);
      }
    });
  }

  // Lookup translation key
  function translateKey(key) {
    return activeTranslations[key] || embeddedFallbackEN[key] || key;
  }

  // Synchronize URL on load
  function syncUrlOnLoad() {
    try {
      const url = new URL(window.location.href);
      if (url.searchParams.get("lang") !== currentLang) {
        url.searchParams.set("lang", currentLang);
        window.history.replaceState({ path: url.href }, "", url.href);
      }
    } catch (e) {
      console.warn("Failed to sync URL on load", e);
    }
  }

  // Update browser address bar query parameter
  function updateAddressBar() {
    try {
      const url = new URL(window.location.href);
      if (url.searchParams.get("lang") !== currentLang) {
        url.searchParams.set("lang", currentLang);
        window.history.pushState({ path: url.href }, "", url.href);
      }
    } catch (e) {
      console.warn("Failed to update address bar URL", e);
    }
  }

  // Rewrite all local navigation links to preserve active language query parameter
  function updatePageLinks() {
    const lang = currentLang;
    document.querySelectorAll("a").forEach(link => {
      let href = link.getAttribute("href");
      if (!href) return;

      if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#") || href.startsWith("javascript:")) {
        return;
      }

      try {
        const hashIdx = href.indexOf('#');
        const queryIdx = href.indexOf('?');

        let basePath = href;
        let searchPart = "";
        let hashPart = "";

        if (hashIdx !== -1) {
          hashPart = href.substring(hashIdx);
          basePath = href.substring(0, hashIdx);
        }

        if (queryIdx !== -1) {
          if (hashIdx !== -1 && queryIdx < hashIdx) {
            searchPart = href.substring(queryIdx, hashIdx);
            basePath = href.substring(0, queryIdx);
          } else if (hashIdx === -1) {
            searchPart = href.substring(queryIdx);
            basePath = href.substring(0, queryIdx);
          }
        }

        const params = new URLSearchParams(searchPart);
        params.set("lang", lang);

        link.setAttribute("href", basePath + "?" + params.toString() + hashPart);
      } catch (e) {
        console.warn("Failed to rewrite link href: " + href, e);
      }
    });
  }

  // Get active language from URL query parameters first, then localStorage, defaulting to 'en'
  let currentLang = getUrlParameter("lang") || getStorageItem("wuwa_lang", "en");
  // Permitted languages: en, ko, ja, zh
  if (!['en', 'ko', 'ja', 'zh'].includes(currentLang)) {
    currentLang = "en";
  }
  setStorageItem("wuwa_lang", currentLang);

  // Translate all tags on the page matching [data-i18n]
  // Helper to check if a navigation link is active (works for both http/https and file:// protocols)
  function isLinkActive(link) {
    const href = link.getAttribute('href');
    const category = link.getAttribute('data-nav-category');
    try {
      const currentUrl = new URL(window.location.href);
      const currentPath = currentUrl.pathname.replace(/\/$/, '');

      if (category) {
        if (category === 'database') {
          return currentPath.includes('/characters/') || currentPath.includes('/weapons/') || currentPath.includes('/echoes/');
        }
        if (category === 'build') {
          return currentPath.includes('/build/');
        }
        if (category === 'guide') {
          return currentPath.includes('/guide/');
        }
        if (category === 'other') {
          return currentPath.includes('/other/');
        }
      }

      if (!href) return false;
      const linkUrl = new URL(href, window.location.href);
      const linkPath = linkUrl.pathname.replace(/\/$/, '');

      if (linkPath.includes('/characters/index.html') || linkPath.endsWith('/characters')) {
        return currentPath.includes('/characters/');
      }
      if (linkPath.includes('/echoes/index.html') || linkPath.endsWith('/echoes')) {
        return currentPath.includes('/echoes/');
      }
      if (linkPath.includes('/weapons/index.html') || linkPath.endsWith('/weapons')) {
        return currentPath.includes('/weapons/');
      }
      if (linkPath.includes('/build/resonator/index.html') || linkPath.endsWith('/build/resonator')) {
        return currentPath.includes('/build/resonator/');
      }
      if (linkPath.includes('/build/rotation/index.html') || linkPath.endsWith('/build/rotation')) {
        return currentPath.includes('/build/rotation/');
      }
      if (linkPath.includes('/build/calculation/index.html') || linkPath.endsWith('/build/calculation')) {
        return currentPath.includes('/build/calculation/');
      }
      if (linkPath.includes('/guide/rotation/index.html') || linkPath.endsWith('/guide/rotation')) {
        return currentPath.includes('/guide/rotation/');
      }
      return linkPath === currentPath;
    } catch (e) {
      return false;
    }
  }

  // Translate all tags on the page matching [data-i18n]
  function translatePage() {
    // Translate text contents
    document.querySelectorAll("[data-i18n]").forEach(elem => {
      const key = elem.getAttribute("data-i18n");
      const val = translateKey(key);
      if (val) {
        const isMenuOrNav = key.startsWith('nav_') || key.startsWith('menu_');

        if (isMenuOrNav) {
          const prefix = getLocalesPathPrefix().replace('locales/', '');
          const isFrover = localStorage.getItem('frover_mode') === 'true';

          let iconName = '';
          let scale = 1.0;

          if (key === 'nav_characters' || key === 'menu_characters') {
            iconName = isFrover ? 'char_icon_frover.png' : 'char_icon_rover.png';
          } else if (key === 'nav_echoes' || key === 'menu_echoes') {
            iconName = 'sonata.png';
          } else if (key === 'nav_weapons' || key === 'menu_weapons') {
            iconName = 'weapon.png';
          }

          const isSubCategory = elem.closest('.sub-category-bar') || (elem.parentElement && elem.parentElement.classList.contains('justify-center') && elem.parentElement.classList.contains('items-center'));

          if (key.startsWith('menu_')) {
            if (isSubCategory) {
              // Sub-category desktop menu styling: keep text-sm and display inline-flex
              elem.style.display = 'inline-flex';
              elem.style.alignItems = 'center';
              elem.style.gap = '6px';

              if (iconName) {
                const maskStyle = `background-color: currentColor; -webkit-mask: url('${prefix}assets/images/guides/${iconName}') no-repeat center; -webkit-mask-size: contain; mask: url('${prefix}assets/images/guides/${iconName}') no-repeat center; mask-size: contain; transform: scale(${scale}); width: 16px; height: 16px;`;
                elem.innerHTML = `<span class="inline-block shrink-0" style="${maskStyle}"></span><span>${val}</span>`;
              } else {
                // Preserve hardcoded FontAwesome icon if present
                const existingIcon = elem.querySelector('i.fa-solid, i.fa-regular, i.fas');
                if (existingIcon) {
                  elem.innerHTML = `${existingIcon.outerHTML}<span>${val}</span>`;
                } else {
                  elem.innerHTML = `<span>${val}</span>`;
                }
              }
            } else {
              // Standard dropdown or mobile link: set plain text to keep layout intact
              elem.innerHTML = val;
            }
          } else {
            // Main nav header styling (mobile and desktop)
            const isMobile = elem.closest('#mobile-menu') !== null;
            if (isMobile) {
              elem.className = "flex items-center justify-between w-full px-5 py-3.5 rounded-xl transition-all duration-200 text-xl font-bold border-b-0";
              if (isLinkActive(elem)) {
                elem.classList.add("bg-purple-600", "text-white");
                elem.classList.remove("text-gray-300", "hover:text-white", "hover:bg-white/5");
              } else {
                elem.classList.add("text-gray-300", "hover:text-white", "hover:bg-white/5");
                elem.classList.remove("bg-purple-600", "text-white");
              }

              if (iconName) {
                const maskStyle = `background-color: currentColor; -webkit-mask: url('${prefix}assets/images/guides/${iconName}') no-repeat center; -webkit-mask-size: contain; mask: url('${prefix}assets/images/guides/${iconName}') no-repeat center; mask-size: contain; transform: scale(${scale}); width: 28px; height: 28px;`;
                elem.innerHTML = `<span>${val}</span><span class="inline-block shrink-0" style="${maskStyle}"></span>`;
              } else {
                elem.innerHTML = `<span>${val}</span>`;
              }
            } else {
              // Desktop menu styling: increase text size to text-base and font-semibold
              elem.classList.remove('text-sm', 'font-medium');
              elem.classList.add('text-base', 'font-semibold');

              elem.style.display = 'inline-flex';
              elem.style.alignItems = 'center';
              elem.style.justifyContent = 'center';
              elem.style.gap = '8px';

              if (iconName) {
                const maskStyle = `background-color: currentColor; -webkit-mask: url('${prefix}assets/images/guides/${iconName}') no-repeat center; -webkit-mask-size: contain; mask: url('${prefix}assets/images/guides/${iconName}') no-repeat center; mask-size: contain; transform: scale(${scale}); width: 22px; height: 22px;`;
                elem.innerHTML = `<span class="inline-block shrink-0" style="${maskStyle}"></span><span>${val}</span>`;
              } else {
                elem.innerHTML = `<span>${val}</span>`;
              }
            }
          }
        } else {
          elem.innerHTML = val;
        }
      }
    });

    // Translate placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(elem => {
      const key = elem.getAttribute("data-i18n-placeholder");
      const val = translateKey(key);
      if (val) {
        elem.setAttribute("placeholder", val);
      }
    });

    // Update global document language
    document.documentElement.setAttribute("lang", currentLang);

    // Highlight active link classes across both desktop and mobile
    document.querySelectorAll("a").forEach(link => {
      if (isLinkActive(link)) {
        if (link.closest('#mobile-menu')) {
          link.classList.add("bg-purple-600/20", "text-purple-400");
          link.classList.remove("text-gray-300");
        }
      }
    });

    // Sync URLs for all links
    updatePageLinks();

    // Sync address bar
    syncUrlOnLoad();
  }

  // Inject the Language Selector Dropdown in the header
  function injectLanguageSelector() {
    const mobileBtn = document.getElementById("mobile-menu-btn");
    if (!mobileBtn) return;

    const parentContainer = mobileBtn.parentElement;
    if (!parentContainer) return;

    if (document.querySelector(".select-lang-container")) return;

    const selectorDiv = document.createElement("div");
    selectorDiv.className = "relative inline-block text-left select-lang-container mr-2";
    selectorDiv.innerHTML = `
      <button id="lang-selector-btn" class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-gray-300 hover:text-white hover:bg-white/10 transition-all focus:outline-none">
        <i class="fa-solid fa-globe text-purple-400"></i>
        <span id="current-lang-label">${currentLang.toUpperCase()}</span>
        <i class="fa-solid fa-chevron-down text-[10px] text-gray-500"></i>
      </button>
      <div id="lang-dropdown" class="hidden absolute right-0 mt-2 w-28 rounded-xl bg-[#16141a] border border-white/10 shadow-xl z-50">
        <div class="py-1">
          <button class="lang-opt w-full text-left px-4 py-2 text-xs font-semibold text-gray-300 hover:text-white hover:bg-purple-600/20 transition-all" data-lang="en">English</button>
          <button class="lang-opt w-full text-left px-4 py-2 text-xs font-semibold text-gray-300 hover:text-white hover:bg-purple-600/20 transition-all" data-lang="ko">한국어</button>
          <button class="lang-opt w-full text-left px-4 py-2 text-xs font-semibold text-gray-300 hover:text-white hover:bg-purple-600/20 transition-all" data-lang="ja">日本語</button>
          <button class="lang-opt w-full text-left px-4 py-2 text-xs font-semibold text-gray-300 hover:text-white hover:bg-purple-600/20 transition-all" data-lang="zh">简体中文</button>
        </div>
      </div>
    `;

    parentContainer.insertBefore(selectorDiv, mobileBtn);

    const btn = document.getElementById("lang-selector-btn");
    const dropdown = document.getElementById("lang-dropdown");

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.classList.toggle("hidden");
    });

    document.addEventListener("click", () => {
      dropdown.classList.add("hidden");
    });

    document.querySelectorAll(".lang-opt").forEach(opt => {
      opt.addEventListener("click", async (e) => {
        const selectedLang = opt.getAttribute("data-lang");
        if (selectedLang !== currentLang) {
          currentLang = selectedLang;
          setStorageItem("wuwa_lang", currentLang);
          document.getElementById("current-lang-label").innerText = currentLang.toUpperCase();

          updateAddressBar();

          // Wait for translations to be fetched
          await loadTranslations(currentLang);

          translatePage();

          const event = new CustomEvent("wuwalangchange", { detail: { lang: currentLang } });
          window.dispatchEvent(event);
        }
      });
    });
  }

  // Initialization routine
  async function init() {
    injectLanguageSelector();
    await loadTranslations(currentLang);
    translatePage();

    // Check if the page has dynamic components that load data at runtime
    const hasDynamicComponents =
      document.getElementById('resonators-grid') ||
      document.getElementById('weapons-container') ||
      document.getElementById('sonata-sets-grid') ||
      document.getElementById('calc-preset') ||
      document.getElementById('user-builds-grid') ||
      window.characterData; // Details page has window.characterData

    if (hasDynamicComponents) {
      // Wait for the page script to call showPage() once dynamic rendering is complete.
      // We set a safety timeout of 300ms so it never remains blank if something errors.
      setTimeout(showPage, 300);
    } else {
      // Show static pages immediately
      showPage();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Track consecutive clicks on characters navigation button for Frover mode
  document.addEventListener('click', (e) => {
    const charBtn = e.target.closest('[data-i18n="nav_characters"], [data-i18n="menu_characters"]');
    if (charBtn) {
      // Prevent default navigation if we are already on the characters list page
      // to avoid continuous page reloads while clicking consecutively.
      if (document.getElementById('resonators-grid')) {
        e.preventDefault();
      }

      const now = Date.now();
      let clickCount = parseInt(localStorage.getItem('frover_clicks') || '0', 10);
      let lastClick = parseInt(localStorage.getItem('frover_last_click') || '0', 10);

      if (now - lastClick < 2000) {
        clickCount++;
      } else {
        clickCount = 1;
      }

      localStorage.setItem('frover_clicks', clickCount);
      localStorage.setItem('frover_last_click', now);

      if (clickCount === 6) {
        const currentMode = localStorage.getItem('frover_mode') === 'true';
        localStorage.setItem('frover_mode', !currentMode ? 'true' : 'false');
        localStorage.setItem('frover_clicks', '0');

        // Refresh page to apply everything cleanly
        window.location.reload();
      }
    }
  });

  // Export globally for custom rendering scripts
  window.wuwaI18n = {
    getLanguage: () => currentLang,
    translate: translatePage,
    t: translateKey,
    showPage: showPage
  };
})();
