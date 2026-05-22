// WuWa AIO i18n Localization Framework (EN/KO)
(function () {
  // Localization dictionary
  const dictionary = {
    en: {
      // Navigation
      nav_characters: "Characters",
      nav_echoes: "Echoes",
      nav_weapons: "Weapons",
      nav_quickswap: "Quick-Swap",
      nav_calculation: "Calculation",
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
      char_card_view: "View Guide Details",
      char_difficulty: "Build Difficulty:",

      // Weapons Page
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
      detail_btn_back: "Back to Database",
      detail_weapon_title: "Weapon Recommendations",
      detail_echo_title: "Echo Setup & Substats",
      detail_best_set: "Best Set Bonus",
      detail_cost_4: "4-Cost Echo",
      detail_cost_3: "3-Cost Echos",
      detail_cost_1: "1-Cost Echos",
      detail_substat_priority: "Substat Leveling Priority",
      detail_stat_priority: "Stat priorities",
      detail_skill_priority: "Skill Priority",
      detail_teams_title: "Recommended Teams",
      detail_resonator: "Resonator"
    },
    ko: {
      // Navigation
      nav_characters: "캐릭터",
      nav_echoes: "에코",
      nav_weapons: "무기",
      nav_quickswap: "퀵스왑",
      nav_calculation: "계산기",
      sub_logo: "올인원 데이터베이스",

      // Landing Page
      landing_title_prefix: "명조",
      landing_title_suffix: ".AIO",
      landing_headline: "명조: 워더링 웨이브 올인원 데이터베이스",
      landing_subtitle: "커뮤니티 데이터를 기반으로 한 실시간 캐릭터 빌드, 에코 세트, 무기 정보 및 퀵스왑 로테이션 툴.",
      landing_version_badge: "명조 1.4+ 버전 준비 완료",
      landing_stat_resonators: "공명자",
      landing_stat_serverless: "서버리스",
      landing_stat_modules: "모듈",
      landing_hero_btn_db: "공명자 빌드 데이터베이스",
      landing_hero_btn_features: "기능 둘러보기",
      landing_card_char_title: "공명자 아카이브",
      landing_card_char_desc: "실시간 빌드 가이드, 스킬 마스터 우선순위, 최적 파티 추천.",
      landing_card_char_btn: "공명자 둘러보기",
      landing_card_echo_title: "에코 데이터베이스",
      landing_card_echo_desc: "에코 화음 효과, 상세 스탯 및 추천 파밍 루트.",
      landing_card_echo_btn: "에코 둘러보기",
      landing_card_weapon_title: "무기 아카이브",
      landing_card_weapon_desc: "기초 스탯, 무기 액티브 효과 및 캐릭터별 무기 추천.",
      landing_card_weapon_btn: "무기 둘러보기",
      landing_card_rotation_title: "퀵스왑 로테이션",
      landing_card_rotation_desc: "최적의 딜 사이클 연계를 위한 타임라인 스케줄러.",
      landing_card_rotation_btn: "로테이션 둘러보기",
      landing_card_calc_title: "데미지 계산기",
      landing_card_calc_desc: "공명자의 상세 스탯 및 데미지 배율 시뮬레이터.",
      landing_card_calc_btn: "계산기 바로가기",
      landing_features_title: "가이드 모듈 둘러보기",
      landing_features_desc: "공명자의 성능을 극대화하고 홀로그램 난이도를 공략하기 위해 특화된 가이드를 선택해 보세요.",

      // Landing How it works
      landing_how_title: "WUWA.AIO 작동 방식",
      landing_how_desc: "비용이 들지 않는 서버리스 아키텍처를 활용하여, 공개된 구글 스프레드시트로부터 실시간 크라우드 소싱 가이드 데이터를 가져와 빠르고 반응성이 뛰어난 프론트엔드 클라이언트를 구성합니다.",
      landing_how_pipeline: "크라우드 소싱 동기화 파이프라인",
      landing_how_step1_badge: "1단계: 입력",
      landing_how_step1_title: "플레이어 제출",
      landing_how_step1_desc: "공명자 제작자는 맞춤 양식 또는 공개 스프레드시트 대기열을 통해 직접 빌드를 제출합니다.",
      landing_how_step1_footer: "구글 폼 로그",
      landing_how_step2_badge: "2단계: 데이터베이스",
      landing_how_step2_title: "스프레드시트 동기화",
      landing_how_step2_desc: "구글 스프레드시트가 사용자 데이터를 분류하고 빠르고 캐시된 웹 CSV 엔드포인트로 노출합니다.",
      landing_how_step2_footer: "게시된 CSV 내보내기",
      landing_how_step3_badge: "3단계: 클라이언트",
      landing_how_step3_title: "프론트엔드 하이드레이션",
      landing_how_step3_desc: "자체 제작한 자바스크립트 파서가 데이터를 처리 및 정제하여 공명자 그리드에 즉시 렌더링합니다.",
      landing_how_step3_footer: "실시간 CSV 하이드레이터",

      // Characters list page
      char_list_title: "공명자 가이드 데이터베이스",
      char_list_subtitle: "실시간 동기화되는 상세 캐릭터 빌드를 필터링하여 확인하세요.",
      char_search_placeholder: "공명자 검색...",
      char_filter_all: "전체",
      char_filter_5: "5★",
      char_filter_4: "4★",
      char_card_view: "상세 가이드 보기",
      char_difficulty: "육성 난이도:",

      // Weapons Page
      weapons_title: "무기 아카이브",
      weapons_subtitle: "상세 무기 스탯, 무기 효과 및 캐릭터 호환성 정보를 확인하세요.",
      weapons_search_placeholder: "무기 검색...",
      weapons_header_title: "무기 능력치 데이터베이스",
      weapons_header_subtitle: "표준 무기 스탯, 보조 스탯 및 무기 효과 배율을 필터링하고 확인하세요.",
      weapons_filter_all: "모든 무기",
      weapons_filter_broadblade: "대검",
      weapons_filter_sword: "직검",
      weapons_filter_rectifier: "증폭기",
      weapons_filter_pistols: "권총",
      weapon_stat_secondary: "보조 속성:",
      weapon_stat_signature: "전용 캐릭터:",
      weapon_stat_recommended: "추천 캐릭터:",
      weapon_ages_of_harvest_name: "태평성대",
      weapon_ages_of_harvest_desc: "속성 피해가 12% 증가합니다. 변주 스킬 또는 공명 스킬 사용 시 공명 스킬 피해량이 중첩되어 최대 48%까지 증가합니다.",
      weapon_stringmaster_name: "스트링마스터",
      weapon_stringmaster_desc: "크리티컬 확률을 올리고 공명 속성 피해를 12% 증가시킵니다. 오프필드 공명 스킬 명중 시 공격력이 12% 증가합니다.",
      weapon_blazing_brilliance_name: "솟아오르는 화염",
      weapon_blazing_brilliance_desc: "높은 크리티컬 피해를 줍니다. 공격력이 12% 증가하며, 공명 스킬 사용 시 일반 공격 및 스킬 피해가 증가하는 버프를 획득합니다.",
      weapon_static_mist_name: "부동의 안개",
      weapon_static_mist_desc: "크리티컬 확률을 제공하고 공명 효율을 12% 올립니다. 캐릭터 교체 퇴장 시 다음 출전 공명자의 공격력이 10% 증가합니다.",
      weapon_variation_name: "판타지 변주",
      weapon_variation_desc: "높은 공명 효율을 제공합니다. 공명 스킬 사용 시 협주 에너지를 8포인트 획득하여 스킬 로테이션 속도를 단축시킵니다.",
      weapon_undying_flame_name: "불멸의 성화",
      weapon_undying_flame_desc: "변주 스킬 발동 시 15초 동안 공명 스킬 피해가 20% 증가합니다. 치샤의 속사 공명 스킬 타수와 매우 잘 맞습니다.",

      // Echoes Page
      echoes_title: "에코 데이터베이스",
      echoes_subtitle: "소나타 화음 효과, 에코 스탯 및 주요 파밍 드랍 몹을 브라우징하세요.",
      echoes_search_placeholder: "소나타 / 에코 검색...",
      echoes_header_title: "소나타 에코 세트 데이터베이스",
      echoes_header_subtitle: "표준 세트 구성, 부옵션 범위 및 추천 파밍 대상을 필터링하고 확인하세요.",
      echoes_set_2pc: "2세트 효과",
      echoes_set_5pc: "5세트 효과",
      echoes_best_resonators: "추천 캐릭터:",
      echo_celestial_light_name: "빛나는 별",
      echo_celestial_light_type: "회절 세트",
      echo_celestial_light_2pc: "회절 피해 +10%",
      echo_celestial_light_5pc: "변주 스킬 사용 시 15초 동안 회절 피해가 30% 증가합니다.",
      echo_void_thunder_name: "울려퍼지는 뇌음",
      echo_void_thunder_type: "전도 세트",
      echo_void_thunder_2pc: "전도 피해 +10%",
      echo_void_thunder_5pc: "강공격 또는 공명 스킬 사용 시 전도 피해가 15% 증가합니다 (최대 2회 중첩, 각 중첩의 지속 시간은 15초).",
      echo_molten_rift_name: "솟구치는 용암",
      echo_molten_rift_type: "용융 세트",
      echo_molten_rift_2pc: "용융 피해 +10%",
      echo_molten_rift_5pc: "공명 스킬 사용 시 15초 동안 용융 피해가 30% 증가합니다.",
      echo_sierra_gale_name: "스쳐가는 바람",
      echo_sierra_gale_type: "기류 세트",
      echo_sierra_gale_2pc: "기류 피해 +10%",
      echo_sierra_gale_5pc: "변주 스킬 사용 시 15초 동안 기류 피해가 30% 증가합니다.",
      echo_sun_sinking_havoc_name: "빛을 삼키는 해",
      echo_sun_sinking_havoc_type: "인멸 세트",
      echo_sun_sinking_havoc_2pc: "인멸 피해 +10%",
      echo_sun_sinking_havoc_5pc: "일반 공격 또는 강공격 사용 시 인멸 피해가 7.5% 증가합니다. 최대 4회 중첩되며 지속 시간은 15초입니다.",
      echo_rejuvenating_glow_name: "찬란한 광휘",
      echo_rejuvenating_glow_type: "치유 세트",
      echo_rejuvenating_glow_2pc: "치료 효과 +10%",
      echo_rejuvenating_glow_5pc: "파티원 치유 시 30초 동안 파티 내 모든 캐릭터의 공격력이 15% 증가합니다.",
      echo_tuning_guide_title: "에코 부옵션 튜닝 가이드",
      echo_tuning_rules_title: "튜닝 기본 규칙",
      echo_tuning_rules_desc1: "에코는 5의 배수 레벨(5, 10, 15, 20, 25)마다 부옵션 슬롯이 개방됩니다. 튜닝에는 에코의 등급에 맞는 <span class=\"text-purple-400\">고급 튜너</span>가 필요합니다.",
      echo_tuning_rules_desc2: "한 번 튜닝된 부옵션은 재굴림할 수 없습니다. 메인 딜러에게 유효하지 않은 옵션(예: 방어력, 체력)이 붙었다면, 해당 에코를 다른 에코의 강화 재료로 먹여 80%의 경험치를 돌려받는 것이 좋습니다.",
      echo_tuning_values_title: "부옵션 범위 (5★ 에코)",
      echo_tuning_crit_rate: "크리티컬 확률:",
      echo_tuning_crit_dmg: "크리티컬 피해:",
      echo_tuning_skill_dmg: "공명 스킬/공명 해방 피해:",
      echo_tuning_energy_regen: "공명 효율:",

      // Calculation Page
      calc_title: "공명자 피해 배율 계산기",
      calc_subtitle: "장착한 빌드에 맞춰 가하는 피해량을 시뮬레이션하고 최적화하세요.",
      calc_header_title: "전술 데미지 계산기",
      calc_header_subtitle: "실시간 전투 능력치, 크리티컬 분포 평균 및 대상 방어력 배율을 시뮬레이션합니다.",
      calc_section_inputs: "전투 매개변수",
      calc_label_atk: "총 공격력",
      calc_label_multiplier: "스킬 피해 배율 (%)",
      calc_label_crit_rate: "크리티컬 확률 (%)",
      calc_label_crit_dmg: "크리티컬 피해 (%)",
      calc_label_dmg_bonus: "속성 피해 증가 (%)",
      calc_label_skill_bonus: "스킬/궁극기 피해 증가 (%)",
      calc_label_def_shred: "적 방어력 감소 (%)",
      calc_label_res: "적 속성 저항 (%)",
      calc_section_outputs: "예상 데미지 결과",
      calc_label_non_crit: "일반 히트 (크리티컬 미발생)",
      calc_label_crit: "크리티컬 히트",
      calc_label_average: "평균 기대 데미지",
      calc_note: "참고: 본 데미지 계산은 표준 90레벨 대상(방어력 감소 전 DEF 배율 &approx; 0.5) 및 기본 10% 속성 저항을 기준으로 합니다.",

      // Quick-Swap Page
      qs_title: "퀵스왑 로테이션 타임라인",
      qs_subtitle: "정밀한 행 단위 스왑 캔슬 콤보를 활용해 전투 효율을 최적화하세요.",
      qs_btn_back: "아카이브로 돌아가기",
      qs_header_title: "퀵스왑 로테이션 가이드",
      qs_header_subtitle: "협주 에너지 흐름 최적화, 반주 버프 조율, 프레임 단위의 모션 캔슬 마스터.",
      qs_adv_mechanic: "심화 메커니즘",
      qs_mechanic_title: "애니메이션 스왑 캔슬이란 무엇인가요?",
      qs_mechanic_desc1: "명조에서는 특정 스킬, 강공격 또는 공명 해방 시전 시 애니메이션이 깁니다. 이 애니메이션이 진행되는 도중에 <span class=\"text-white font-semibold\">즉시 다른 공명자로 캐릭터를 교체</span>할 수 있습니다.",
      qs_mechanic_desc2: "이전 공명자는 필드에 남아 애니메이션을 끝까지 수행하며, 새로 교체된 공명자가 동시에 공격을 시작합니다. 이를 통해 폭발적인 딜링 타이밍에 DPS를 사실상 두 배로 늘릴 수 있습니다.",
      qs_prime_title: "대표적인 스왑 캔슬 타이밍",
      qs_prime_yinlin: "공명 스킬 & 포르테 강공격 애니메이션.",
      qs_prime_jinhsi: "공명 스킬(용의 광채 레이저) 시전.",
      qs_prime_changli: "포르테 강공격(솟구치는 화염) 상승 베기.",
      qs_std_timeline_title: "표준 프리미엄 파티 로테이션 타임라인",
      qs_node1_time: "0.0초 - 4.0초",
      qs_node1_title: "벨리나 빌드업",
      qs_node1_desc: "일반 공격 및 공중 공격으로 협주 에너지를 충전합니다. 거북이(원저 격동) 에코 스킬로 보호막을 생성하고 반주 스킬을 통해 다음 캐릭터에 버프를 부여합니다.",
      qs_node2_time: "4.0초 - 10.0초",
      qs_node2_title: "음림 협동 공격",
      qs_node2_desc: "변주 스킬로 입장합니다. 공명 스킬 1단계를 시전하고 일반 공격 콤보로 포르테 게이지를 채웁니다. 공명 해방과 포르테 강공격을 사용한 뒤 강공격 모션 도중에 즉시 캐릭터를 교체합니다.",
      qs_node3_time: "10.0초 - 18.0초",
      qs_node3_title: "금희 폭발 딜링",
      qs_node3_desc: "모든 버프를 받은 상태로 변주 스킬을 통해 입장합니다. 일반 공격을 연계해 동조 상태에 진입합니다. 음림의 오프필드 협동 공격으로 금희의 포르테를 쌓습니다. 용의 레이저로 폭발적인 대미지를 입히고 스왑 캔슬로 퇴장합니다.",
      qs_db_title: "로테이션 가이드 아카이브",
      qs_db_subtitle: "아래 파티 로테이션을 선택하여 프레임별 상세 스왑 타임라인을 확인하세요.",
      qs_search_placeholder: "파티명 또는 공명자 검색...",
      qs_register_title: "로테이션 등록",
      qs_register_desc: "자신만의 구글 스프레드시트 URL을 추가하여 맞춤형 로테이션 가이드를 로컬 데이터베이스에 등록하세요. 시트는 행 단위 단계를 준수해야 합니다.",
      qs_sync_status: "동기화 상태",
      qs_sheet_label: "스프레드시트 링크 / ID",
      qs_sheet_placeholder: "공유 URL, 웹 게시 URL 또는 ID 붙여넣기...",
      qs_register_btn: "등록",
      qs_register_note: "참고: 시트가 \"링크가 있는 모든 사용자가 볼 수 있음\"으로 공유되거나 CSV로 게시되었는지 확인하십시오.",
      qs_format_guide_title: "스프레드시트 서식 가이드",
      qs_format_guide_desc: "자신만의 퀵스왑 로테이션 타임라인을 등록하려면 구글 스프레드시트를 이 템플릿과 동일하게 구성해야 합니다. 페이지에서 행을 동적으로 분석하여 스왑 캔슬 타이밍을 보여주는 타임라인을 그려냅니다.",
      qs_row1_title: "1행 (메타데이터 및 캐릭터 스펙)",
      qs_row2_title: "2행 이후 (로테이션 단계)",
      qs_row_warning: "만약 두 개의 동작이 동일한 행에 있는 경우 (예: 위 4행의 경우 공명자 2와 3이 동시에 행동), 타임라인 상에 나란히 렌더링되며 활성화된 스왑 캔슬 창을 나타냅니다!",
      qs_view_guide: "가이드 보기",
      qs_contributor_by: "공헌자:",

      // Quick-swap Detail Page
      qsd_specs_title: "공명자 상세 세팅",
      qsd_weapon: "무기",
      qsd_echo: "에코",
      qsd_steps_title: "로테이션 진행 타임라인",
      qsd_swap_cancel: "스왑 캔슬",
      qsd_error_title: "로테이션 로드 실패",
      qsd_error_desc: "스프레드시트 데이터를 가져오는 동안 문제가 발생했습니다.",
      qsd_error_btn: "돌아가기",
      qsd_premium_badge: "프리미엄 가이드",
      qsd_custom_badge: "커스텀 시트",
      qsd_source_btn: "원본 구글 스프레드시트 보기",
      qsd_contributor_prefix: "공헌자:",
      qsd_step_execution: "단계 실행",
      qsd_loading_text: "로테이션 정보를 불러오는 중...",
      qsd_swap_cancel_window_title: "<i class=\"fa-solid fa-bolt\"></i> 스왑 캔슬 구간:",
      qsd_swap_cancel_window_desc: "연결된 선은 동시에 실행되는 동작을 나타냅니다.",

      // Footer
      footer_disclaimer: "© 2026 WuWa AIO 가이드. 이 웹사이트는 팬이 제작한 데이터베이스 툴입니다. 명조: 워더링 웨이브 및 모든 게임 자산은 Kuro Games의 상표입니다.",

      // Detail Page Elements
      detail_btn_back: "데이터베이스로 돌아가기",
      detail_weapon_title: "추천 무기 세팅",
      detail_echo_title: "에코 세팅 및 부옵션",
      detail_best_set: "추천 화음 효과",
      detail_cost_4: "4코스트 에코",
      detail_cost_3: "3코스트 에코",
      detail_cost_1: "1코스트 에코",
      detail_substat_priority: "부옵션 육성 우선순위",
      detail_stat_priority: "속성 우선순위",
      detail_skill_priority: "추천 스킬 마스터 순위",
      detail_teams_title: "추천 파티 조합",
      detail_resonator: "공명자"
    }
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
      
      // Skip absolute external URLs, mailto, tel, hash-only, javascript:
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
  if (currentLang !== "en" && currentLang !== "ko") {
    currentLang = "en";
  }
  setStorageItem("wuwa_lang", currentLang);

  // Translate all tags on the page matching [data-i18n]
  function translatePage() {
    const lang = currentLang;

    // Translate text contents
    document.querySelectorAll("[data-i18n]").forEach(elem => {
      const key = elem.getAttribute("data-i18n");
      if (dictionary[lang][key]) {
        elem.innerHTML = dictionary[lang][key];
      }
    });

    // Translate placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(elem => {
      const key = elem.getAttribute("data-i18n-placeholder");
      if (dictionary[lang][key]) {
        elem.setAttribute("placeholder", dictionary[lang][key]);
      }
    });

    // Update global document language
    document.documentElement.setAttribute("lang", lang);

    // Sync URLs for all links
    updatePageLinks();

    // Sync address bar
    syncUrlOnLoad();
  }

  // Inject the Language Selector Dropdown in the header
  function injectLanguageSelector() {
    const mobileBtn = document.getElementById("mobile-menu-btn");
    if (!mobileBtn) return; // Only inject on pages with headers
    
    const parentContainer = mobileBtn.parentElement;
    if (!parentContainer) return;

    // Check if selector is already injected
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
        </div>
      </div>
    `;

    // Prepend to parent right before the mobile menu trigger button
    parentContainer.insertBefore(selectorDiv, mobileBtn);

    // Dropdown toggling logic
    const btn = document.getElementById("lang-selector-btn");
    const dropdown = document.getElementById("lang-dropdown");

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.classList.toggle("hidden");
    });

    document.addEventListener("click", () => {
      dropdown.classList.add("hidden");
    });

    // Handle language selection click
    document.querySelectorAll(".lang-opt").forEach(opt => {
      opt.addEventListener("click", (e) => {
        const selectedLang = opt.getAttribute("data-lang");
        if (selectedLang !== currentLang) {
          currentLang = selectedLang;
          setStorageItem("wuwa_lang", currentLang);
          document.getElementById("current-lang-label").innerText = currentLang.toUpperCase();
          
          // Update address bar
          updateAddressBar();

          // Apply standard static page translations
          translatePage();
          
          // Dispatch custom event to notify dynamic rendering code (e.g. lists, grids, detail compilers)
          const event = new CustomEvent("wuwalangchange", { detail: { lang: currentLang } });
          window.dispatchEvent(event);
        }
      });
    });
  }

  // Hook into DOMContentLoaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      injectLanguageSelector();
      translatePage();
    });
  } else {
    injectLanguageSelector();
    translatePage();
  }

  // Export globally for custom rendering scripts
  window.wuwaI18n = {
    getLanguage: () => currentLang,
    translate: translatePage
  };
})();
