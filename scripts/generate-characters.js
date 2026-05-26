const fs = require('fs');
const path = require('path');

// Configure element-specific style mappings
const elementStyles = {
  Spectro: {
    selection_theme: 'selection:bg-yellow-500/30 selection:text-yellow-200',
    glow_color_top: 'bg-yellow-500/10',
    glow_color_bottom: 'bg-amber-500/5',
    header_border_theme: 'border-yellow-500/10',
    gradient_accent: 'from-yellow-500 to-amber-500',
    gradient_text_end: 'to-yellow-400',
    accent_text: 'text-yellow-500',
    logo_shadow_theme: 'shadow-yellow-500/20',
    nav_active_classes: 'text-yellow-400 bg-white/5 border-b-2 border-yellow-500/50',
    button_gradient: 'from-yellow-600 to-amber-500',
    focus_ring_class: 'focus:ring-yellow-800',
    mobile_button_gradient: 'from-yellow-500 to-amber-600',
    mobile_button_shadow: 'shadow-yellow-500/25',
    hero_bg_class: 'from-yellow-950/20 to-[#1a181f]/40',
    hero_border_class: 'border-yellow-500/20',
    element_badge_theme: 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30',
    role_badge_theme: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
    accent_gradient: 'from-yellow-500 via-amber-400 to-yellow-600',
    echo_icon_bg: 'bg-yellow-500/10',
    note_text_color: 'text-yellow-500/70',
    logo_bg_class: 'bg-yellow-500',
    stat_idx1_bg_border_text: 'bg-yellow-500/20 text-yellow-400',
    stat_idx2_bg_border_text: 'bg-yellow-500/10 text-gray-400',
    weapon_sig_card_border: 'border-yellow-500/10 hover:border-yellow-500/30',
    weapon_alt_card_border: 'border-white/5 hover:border-yellow-500/20',
    weapon_sig_badge: 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30',
    weapon_alt_badge: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
    team_premium_border: 'border-yellow-500/10',
    team_premium_badge: 'text-yellow-400',
    priority_highlight_text: 'text-yellow-400 font-bold',
    priority_high_text: 'text-yellow-300 font-semibold'
  },
  Fusion: {
    selection_theme: 'selection:bg-red-500/30 selection:text-red-200',
    glow_color_top: 'bg-red-900/10',
    glow_color_bottom: 'bg-orange-900/5',
    header_border_theme: 'border-red-500/10',
    gradient_accent: 'from-red-600 to-orange-500',
    gradient_text_end: 'to-red-400',
    accent_text: 'text-red-500',
    logo_shadow_theme: 'shadow-red-500/20',
    nav_active_classes: 'text-red-400 bg-white/5 border-b-2 border-red-500/50',
    button_gradient: 'from-red-600 to-orange-500',
    focus_ring_class: 'focus:ring-red-800',
    mobile_button_gradient: 'from-red-600 to-orange-600',
    mobile_button_shadow: 'shadow-red-500/25',
    hero_bg_class: 'from-red-950/20 to-[#1a181f]/40',
    hero_border_class: 'border-red-500/20',
    element_badge_theme: 'bg-red-500/20 text-red-300 border border-red-500/30',
    role_badge_theme: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
    accent_gradient: 'from-red-600 via-orange-400 to-red-500',
    echo_icon_bg: 'bg-red-500/10',
    note_text_color: 'text-red-500/70',
    logo_bg_class: 'bg-red-500',
    stat_idx1_bg_border_text: 'bg-red-500/20 text-red-400',
    stat_idx2_bg_border_text: 'bg-red-500/10 text-gray-400',
    weapon_sig_card_border: 'border-red-500/10 hover:border-red-500/30',
    weapon_alt_card_border: 'border-white/5 hover:border-red-500/20',
    weapon_sig_badge: 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30',
    weapon_alt_badge: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
    team_premium_border: 'border-red-500/10',
    team_premium_badge: 'text-red-400',
    priority_highlight_text: 'text-red-400 font-bold',
    priority_high_text: 'text-red-300 font-semibold'
  },
  Electro: {
    selection_theme: 'selection:bg-purple-500/30 selection:text-purple-200',
    glow_color_top: 'bg-purple-900/10',
    glow_color_bottom: 'bg-indigo-900/5',
    header_border_theme: 'border-purple-500/10',
    gradient_accent: 'from-purple-600 to-indigo-500',
    gradient_text_end: 'to-purple-400',
    accent_text: 'text-purple-500',
    logo_shadow_theme: 'shadow-purple-500/20',
    nav_active_classes: 'text-purple-400 bg-white/5 border-b-2 border-purple-500/50',
    button_gradient: 'from-purple-600 to-indigo-500',
    focus_ring_class: 'focus:ring-purple-800',
    mobile_button_gradient: 'from-purple-600 to-indigo-600',
    mobile_button_shadow: 'shadow-purple-500/25',
    hero_bg_class: 'from-purple-950/20 to-[#1a181f]/40',
    hero_border_class: 'border-purple-500/20',
    element_badge_theme: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
    role_badge_theme: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
    accent_gradient: 'from-purple-600 via-indigo-400 to-purple-500',
    echo_icon_bg: 'bg-purple-500/10',
    note_text_color: 'text-purple-500/70',
    logo_bg_class: 'bg-purple-600',
    stat_idx1_bg_border_text: 'bg-purple-500/20 text-purple-400',
    stat_idx2_bg_border_text: 'bg-purple-500/10 text-gray-400',
    weapon_sig_card_border: 'border-purple-500/10 hover:border-purple-500/30',
    weapon_alt_card_border: 'border-white/5 hover:border-purple-500/20',
    weapon_sig_badge: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
    weapon_alt_badge: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
    team_premium_border: 'border-purple-500/10',
    team_premium_badge: 'text-purple-400',
    priority_highlight_text: 'text-purple-400 font-bold',
    priority_high_text: 'text-purple-300 font-semibold'
  }
};

const charactersFilePath = path.join(__dirname, '../assets/data/characters.json');
const templateFilePath = path.join(__dirname, '../characters/template.html');
const weaponsFilePath = path.join(__dirname, '../assets/data/weapons.json');
const echoesFilePath = path.join(__dirname, '../assets/data/echoes.json');

console.log('Loading character configurations and layout template...');

if (!fs.existsSync(charactersFilePath)) {
  console.error(`Error: File not found at ${charactersFilePath}`);
  process.exit(1);
}
if (!fs.existsSync(templateFilePath)) {
  console.error(`Error: File not found at ${templateFilePath}`);
  process.exit(1);
}
if (!fs.existsSync(weaponsFilePath)) {
  console.error(`Error: File not found at ${weaponsFilePath}`);
  process.exit(1);
}
if (!fs.existsSync(echoesFilePath)) {
  console.error(`Error: File not found at ${echoesFilePath}`);
  process.exit(1);
}

const rawCharacters = JSON.parse(fs.readFileSync(charactersFilePath, 'utf8'));
const template = fs.readFileSync(templateFilePath, 'utf8');
const weaponsMaster = JSON.parse(fs.readFileSync(weaponsFilePath, 'utf8'));
const echoesMaster = JSON.parse(fs.readFileSync(echoesFilePath, 'utf8'));

// Resolve relationships on characters
const characters = rawCharacters.map(char => {
  const resolvedChar = JSON.parse(JSON.stringify(char));
  
  // Resolve weapons
  resolvedChar.weapons = char.weapons.map(wRef => {
    const master = weaponsMaster[wRef.id];
    if (!master) {
      console.warn(`Warning: Master weapon "${wRef.id}" not found for resonator "${char.id}".`);
      return wRef;
    }
    return {
      ...wRef,
      name: master.name,
      specs: {
        en: `Base ATK: ${master.baseAtk} • ${master.secondaryStat.en} (Lvl 90)`
      },
      desc: master.desc
    };
  });

  // Resolve echoes set
  const setBonusId = char.echoSetup.bestSetBonusId;
  const masterEcho = echoesMaster[setBonusId];
  if (masterEcho) {
    resolvedChar.echoSetup.bestSetBonus = {
      en: `${masterEcho.name.en} (5-Piece Set)`
    };
  } else {
    resolvedChar.echoSetup.bestSetBonus = { en: "Custom Set" };
  }

  return resolvedChar;
});



characters.forEach(char => {
  console.log(`Compiling guide details for ${char.name.en}...`);

  const styles = elementStyles[char.element.en];
  if (!styles) {
    console.error(`Warning: Style profile not found for element "${char.element.en}". Skipping ${char.name.en}.`);
    return;
  }

  // Generate stars list
  let starsHtml = '';
  for (let i = 0; i < char.rarity; i++) {
    starsHtml += `<i class="fa-solid fa-star animate-pulse" ${i > 0 ? `style="animation-delay: ${0.2 * i}s"` : ''}></i>\n`;
  }

  // Generate character portrait HTML
  const charImagesDir = path.join(__dirname, '../assets/images/characters', char.id);
  let portraitHtml = `<div class="w-32 h-32 rounded-full bg-gradient-to-tr ${styles.accent_gradient} p-0.5 shadow-2xl ${styles.logo_shadow_theme} flex items-center justify-center overflow-hidden"><div class="w-full h-full rounded-full bg-[#1a181f] flex items-center justify-center"><i class="${char.icon_class} ${styles.accent_text} text-6xl"></i></div></div>`;
  if (fs.existsSync(charImagesDir)) {
    if (fs.existsSync(path.join(charImagesDir, 'portrait.png'))) {
      portraitHtml = `<img src="../../assets/images/characters/${char.id}/portrait.png" alt="${char.name.en}" class="w-full h-full object-contain">`;
    } else if (fs.existsSync(path.join(charImagesDir, 'potrait.png'))) {
      portraitHtml = `<img src="../../assets/images/characters/${char.id}/potrait.png" alt="${char.name.en}" class="w-full h-full object-contain">`;
    }
  }

  // Generate weapons list HTML
  const weaponsListHtml = char.weapons.map(weapon => {
    const isSig = weapon.isSignature;
    const borderClass = isSig ? styles.weapon_sig_card_border : styles.weapon_alt_card_border;
    const badgeClass = isSig ? styles.weapon_sig_badge : styles.weapon_alt_badge;
    const iconClass = isSig ? "fa-solid fa-sparkles text-xl" : "fa-solid fa-shield-halved text-xl";
    const iconColor = isSig ? styles.accent_text : "text-gray-400";
    const iconBg = isSig ? styles.echo_icon_bg : "bg-gray-500/10";
    const borderIcon = isSig ? styles.hero_border_class : "border-white/10";

    // Check if weapon image exists
    const weaponImgPath = path.join(__dirname, '../assets/images/weapons', `${weapon.id}.png`);
    let weaponIconHtml = '';
    if (fs.existsSync(weaponImgPath)) {
      weaponIconHtml = `<img src="../../assets/images/weapons/${weapon.id}.png" alt="${weapon.name.en}" class="w-full h-full object-contain p-1">`;
    } else {
      weaponIconHtml = `<i class="${iconClass}"></i>`;
    }

    return `            <!-- ${isSig ? 'Signature Weapon' : 'Alternative Weapon'} -->
            <div class="bg-[#0a080f] p-5 rounded-xl border ${borderClass} transition-all flex flex-col sm:flex-row justify-between items-start gap-4">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 ${iconBg} rounded-lg flex items-center justify-center ${iconColor} shrink-0 border ${borderIcon} overflow-hidden">
                  ${weaponIconHtml}
                </div>
                <div>
                  <h4 class="text-base font-bold text-white flex items-center gap-2">
                    ${weapon.name.en}
                    <span class="text-[10px] ${badgeClass} px-1.5 py-0.5 rounded uppercase font-bold">${weapon.rarityLabel.en}</span>
                  </h4>
                  <p class="text-xs text-gray-500 mt-1">${weapon.specs.en}</p>
                  <p class="text-xs text-gray-300 mt-2">
                    ${weapon.desc.en}
                  </p>
                </div>
              </div>
            </div>`;
  }).join('\n');

  // Generate stat priorities HTML
  const statPrioritiesHtml = char.statPriorities.en.map((stat, index) => {
    const isFirst = index === 0;
    const numBg = isFirst ? styles.stat_idx1_bg_border_text : styles.stat_idx2_bg_border_text;
    return `            <div class="flex items-center gap-2 bg-[#0a080f]/50 p-2.5 rounded-lg border border-white/5">
              <span class="w-5 h-5 rounded-md ${numBg} font-bold font-mono flex items-center justify-center">${index + 1}</span>
              <span class="font-semibold text-white">${stat}</span>
            </div>`;
  }).join('\n');

  // Generate skill priorities HTML
  const skillPrioritiesHtml = char.skillPriorities.map((item, index) => {
    let prioClass = 'text-gray-500';
    if (index === 0) prioClass = styles.priority_highlight_text;
    else if (index === 1) prioClass = styles.priority_high_text;
    else if (index === 2) prioClass = 'text-gray-300 font-medium';

    return `              <div class="flex items-center justify-between text-xs bg-[#0a080f] p-2 rounded-lg border border-white/5">
                <span class="text-gray-400">${item.skill.en}</span>
                <span class="${prioClass}">${item.priority.en}</span>
              </div>`;
  }).join('\n');

  // Generate recommended teams HTML
  const recommendedTeamsHtml = char.recommendedTeams.map(team => {
    const borderClass = team.isPremium ? styles.team_premium_border : 'border-white/5';
    const titleColor = team.isPremium ? styles.team_premium_badge : 'text-gray-400';
    const membersList = team.members.en.map(member => `                <li>• ${member}</li>`).join('\n');
    return `            <!-- Team Card -->
            <div class="bg-[#0a080f]/50 border ${borderClass} rounded-xl p-3.5 space-y-2">
              <span class="block ${titleColor} font-bold tracking-wide uppercase">${team.name.en}</span>
              <ul class="space-y-1.5 text-gray-300 font-medium">
${membersList}
              </ul>
            </div>`;
  }).join('\n');

  // Apply substitutions to layout template
  let pageContent = template
    .replace(/{{name}}/g, char.name.en)
    .replace(/{{description}}/g, char.description.en)
    .replace(/{{element}}/g, char.element.en)
    .replace(/{{weaponType}}/g, char.weaponType.en)
    .replace(/{{role}}/g, char.role.en)
    .replace(/{{rarity}}/g, char.rarity)
    .replace(/{{icon_class}}/g, char.icon_class)
    
    // Style substitutions
    .replace(/{{selection_theme}}/g, styles.selection_theme)
    .replace(/{{glow_color_top}}/g, styles.glow_color_top)
    .replace(/{{glow_color_bottom}}/g, styles.glow_color_bottom)
    .replace(/{{header_border_theme}}/g, styles.header_border_theme)
    .replace(/{{gradient_accent}}/g, styles.gradient_accent)
    .replace(/{{gradient_text_end}}/g, styles.gradient_text_end)
    .replace(/{{accent_text}}/g, styles.accent_text)
    .replace(/{{logo_shadow_theme}}/g, styles.logo_shadow_theme)
    .replace(/{{nav_active_classes}}/g, styles.nav_active_classes)
    .replace(/{{button_gradient}}/g, styles.button_gradient)
    .replace(/{{focus_ring_class}}/g, styles.focus_ring_class)
    .replace(/{{mobile_button_gradient}}/g, styles.mobile_button_gradient)
    .replace(/{{mobile_button_shadow}}/g, styles.mobile_button_shadow)
    .replace(/{{hero_bg_class}}/g, styles.hero_bg_class)
    .replace(/{{hero_border_class}}/g, styles.hero_border_class)
    .replace(/{{element_badge_theme}}/g, styles.element_badge_theme)
    .replace(/{{role_badge_theme}}/g, styles.role_badge_theme)
    .replace(/{{accent_gradient}}/g, styles.accent_gradient)
    .replace(/{{echo_icon_bg}}/g, styles.echo_icon_bg)
    .replace(/{{note_text_color}}/g, styles.note_text_color)
    .replace(/{{logo_bg_class}}/g, styles.logo_bg_class)
    .replace(/{{stat_idx1_bg_border_text}}/g, styles.stat_idx1_bg_border_text)
    .replace(/{{stat_idx2_bg_border_text}}/g, styles.stat_idx2_bg_border_text)
    .replace(/{{weapon_sig_card_border}}/g, styles.weapon_sig_card_border)
    .replace(/{{weapon_alt_card_border}}/g, styles.weapon_alt_card_border)
    .replace(/{{weapon_sig_badge}}/g, styles.weapon_sig_badge)
    .replace(/{{weapon_alt_badge}}/g, styles.weapon_alt_badge)
    .replace(/{{team_premium_border}}/g, styles.team_premium_border)
    .replace(/{{team_premium_badge}}/g, styles.team_premium_badge)
    .replace(/{{priority_highlight_text}}/g, styles.priority_highlight_text)
    .replace(/{{priority_high_text}}/g, styles.priority_high_text)

    // Data-derived loop blocks
    .replace(/{{portrait_html}}/g, portraitHtml)
    .replace(/{{stars_html}}/g, starsHtml.trim())
    .replace(/{{weapons_list_html}}/g, weaponsListHtml)
    .replace(/{{best_set_bonus}}/g, char.echoSetup.bestSetBonus.en)
    .replace(/{{cost_4_name}}/g, char.echoSetup.cost4Name.en)
    .replace(/{{cost_4}}/g, char.echoSetup.cost4.en)
    .replace(/{{cost_3}}/g, char.echoSetup.cost3.en)
    .replace(/{{cost_1}}/g, char.echoSetup.cost1.en)
    .replace(/{{substats_priority}}/g, char.echoSetup.substatsPriority.en)
    .replace(/{{echo_note}}/g, char.echoSetup.note.en)
    .replace(/{{stat_priorities_html}}/g, statPrioritiesHtml)
    .replace(/{{skill_priorities_html}}/g, skillPrioritiesHtml)
    .replace(/{{recommended_teams_html}}/g, recommendedTeamsHtml)
    .replace(/{{character_json_data}}/g, JSON.stringify(char));

  // Write out file
  const outputDir = path.join(__dirname, '../characters', char.id);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const outputPath = path.join(outputDir, 'index.html');
  fs.writeFileSync(outputPath, pageContent, 'utf8');
  console.log(`Saved character index file: ${outputPath}`);
});

console.log('Static character compilation complete!');
