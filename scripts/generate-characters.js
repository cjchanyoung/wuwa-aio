const fs = require('fs');
const path = require('path');

// Configure attribute-specific style mappings
const attributeStyles = {
  Spectro: {
    selection_theme: 'selection:bg-[#B9A81C]/30 selection:text-yellow-200',
    glow_color_top: 'bg-[#B9A81C]/10',
    glow_color_bottom: 'bg-yellow-950/5',
    header_border_theme: 'border-[#B9A81C]/10',
    gradient_accent: 'from-[#B9A81C] to-yellow-600',
    gradient_text_end: 'to-yellow-400',
    accent_text: 'text-[#B9A81C]',
    logo_shadow_theme: 'shadow-[#B9A81C]/20',
    nav_active_classes: 'text-[#B9A81C] bg-white/5 border-b-2 border-[#B9A81C]/50',
    button_gradient: 'from-[#B9A81C] to-yellow-600',
    focus_ring_class: 'focus:ring-yellow-800',
    mobile_button_gradient: 'from-[#B9A81C] to-yellow-700',
    mobile_button_shadow: 'shadow-[#B9A81C]/25',
    hero_bg_class: 'from-[#B9A81C]/20 to-[#1a181f]/40',
    hero_border_class: 'border-[#B9A81C]/20',
    attribute_badge_theme: 'bg-[#B9A81C]/20 text-[#B9A81C] border border-[#B9A81C]/30',
    role_badge_theme: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
    accent_gradient: 'from-[#B9A81C] via-yellow-400 to-[#B9A81C]',
    echo_icon_bg: 'bg-[#B9A81C]/10',
    note_text_color: 'text-[#B9A81C]/70',
    logo_bg_class: 'bg-[#B9A81C]',
    stat_idx1_bg_border_text: 'bg-[#B9A81C]/20 text-yellow-400',
    stat_idx2_bg_border_text: 'bg-[#B9A81C]/10 text-gray-400',
    weapon_sig_card_border: 'border-[#B9A81C]/10 hover:border-[#B9A81C]/30',
    weapon_alt_card_border: 'border-white/5 hover:border-[#B9A81C]/20',
    weapon_sig_badge: 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30',
    weapon_alt_badge: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
    team_premium_border: 'border-[#B9A81C]/10',
    team_premium_badge: 'text-yellow-400',
    priority_highlight_text: 'text-yellow-400 font-bold',
    priority_high_text: 'text-yellow-300 font-semibold',
    sequence_filter: 'brightness(0) invert(1) drop-shadow(0 0 3px rgba(185, 168, 28, 0.9))'
  },
  Fusion: {
    selection_theme: 'selection:bg-[#C4294E]/30 selection:text-rose-200',
    glow_color_top: 'bg-[#C4294E]/10',
    glow_color_bottom: 'bg-rose-950/5',
    header_border_theme: 'border-[#C4294E]/10',
    gradient_accent: 'from-[#C4294E] to-rose-600',
    gradient_text_end: 'to-rose-400',
    accent_text: 'text-[#C4294E]',
    logo_shadow_theme: 'shadow-[#C4294E]/20',
    nav_active_classes: 'text-[#C4294E] bg-white/5 border-b-2 border-[#C4294E]/50',
    button_gradient: 'from-[#C4294E] to-rose-600',
    focus_ring_class: 'focus:ring-rose-800',
    mobile_button_gradient: 'from-[#C4294E] to-rose-700',
    mobile_button_shadow: 'shadow-[#C4294E]/25',
    hero_bg_class: 'from-[#C4294E]/20 to-[#1a181f]/40',
    hero_border_class: 'border-[#C4294E]/20',
    attribute_badge_theme: 'bg-[#C4294E]/20 text-[#C4294E] border border-[#C4294E]/30',
    role_badge_theme: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
    accent_gradient: 'from-[#C4294E] via-rose-400 to-[#C4294E]',
    echo_icon_bg: 'bg-[#C4294E]/10',
    note_text_color: 'text-[#C4294E]/70',
    logo_bg_class: 'bg-[#C4294E]',
    stat_idx1_bg_border_text: 'bg-[#C4294E]/20 text-rose-400',
    stat_idx2_bg_border_text: 'bg-[#C4294E]/10 text-gray-400',
    weapon_sig_card_border: 'border-[#C4294E]/10 hover:border-[#C4294E]/30',
    weapon_alt_card_border: 'border-white/5 hover:border-[#C4294E]/20',
    weapon_sig_badge: 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30',
    weapon_alt_badge: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
    team_premium_border: 'border-[#C4294E]/10',
    team_premium_badge: 'text-rose-400',
    priority_highlight_text: 'text-rose-400 font-bold',
    priority_high_text: 'text-rose-300 font-semibold',
    sequence_filter: 'brightness(0) invert(1) drop-shadow(0 0 3px rgba(196, 41, 78, 0.9))'
  },
  Electro: {
    selection_theme: 'selection:bg-[#A431AE]/30 selection:text-fuchsia-200',
    glow_color_top: 'bg-[#A431AE]/10',
    glow_color_bottom: 'bg-fuchsia-950/5',
    header_border_theme: 'border-[#A431AE]/10',
    gradient_accent: 'from-[#A431AE] to-fuchsia-600',
    gradient_text_end: 'to-fuchsia-400',
    accent_text: 'text-[#A431AE]',
    logo_shadow_theme: 'shadow-[#A431AE]/20',
    nav_active_classes: 'text-[#A431AE] bg-white/5 border-b-2 border-[#A431AE]/50',
    button_gradient: 'from-[#A431AE] to-fuchsia-600',
    focus_ring_class: 'focus:ring-fuchsia-800',
    mobile_button_gradient: 'from-[#A431AE] to-fuchsia-700',
    mobile_button_shadow: 'shadow-[#A431AE]/25',
    hero_bg_class: 'from-[#A431AE]/20 to-[#1a181f]/40',
    hero_border_class: 'border-[#A431AE]/20',
    attribute_badge_theme: 'bg-[#A431AE]/20 text-[#A431AE] border border-[#A431AE]/30',
    role_badge_theme: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
    accent_gradient: 'from-[#A431AE] via-fuchsia-400 to-[#A431AE]',
    echo_icon_bg: 'bg-[#A431AE]/10',
    note_text_color: 'text-[#A431AE]/70',
    logo_bg_class: 'bg-[#A431AE]',
    stat_idx1_bg_border_text: 'bg-[#A431AE]/20 text-fuchsia-400',
    stat_idx2_bg_border_text: 'bg-[#A431AE]/10 text-gray-400',
    weapon_sig_card_border: 'border-[#A431AE]/10 hover:border-[#A431AE]/30',
    weapon_alt_card_border: 'border-white/5 hover:border-[#A431AE]/20',
    weapon_sig_badge: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
    weapon_alt_badge: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
    team_premium_border: 'border-[#A431AE]/10',
    team_premium_badge: 'text-fuchsia-400',
    priority_highlight_text: 'text-fuchsia-400 font-bold',
    priority_high_text: 'text-fuchsia-300 font-semibold',
    sequence_filter: 'brightness(0) invert(1) drop-shadow(0 0 3px rgba(164, 49, 174, 0.9))'
  },
  Aero: {
    selection_theme: 'selection:bg-[#2EC69E]/30 selection:text-emerald-200',
    glow_color_top: 'bg-[#2EC69E]/10',
    glow_color_bottom: 'bg-emerald-950/5',
    header_border_theme: 'border-[#2EC69E]/10',
    gradient_accent: 'from-[#2EC69E] to-emerald-600',
    gradient_text_end: 'to-emerald-400',
    accent_text: 'text-[#2EC69E]',
    logo_shadow_theme: 'shadow-[#2EC69E]/20',
    nav_active_classes: 'text-[#2EC69E] bg-white/5 border-b-2 border-[#2EC69E]/50',
    button_gradient: 'from-[#2EC69E] to-emerald-600',
    focus_ring_class: 'focus:ring-emerald-800',
    mobile_button_gradient: 'from-[#2EC69E] to-emerald-700',
    mobile_button_shadow: 'shadow-[#2EC69E]/25',
    hero_bg_class: 'from-[#2EC69E]/20 to-[#1a181f]/40',
    hero_border_class: 'border-[#2EC69E]/20',
    attribute_badge_theme: 'bg-[#2EC69E]/20 text-[#2EC69E] border border-[#2EC69E]/30',
    role_badge_theme: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
    accent_gradient: 'from-[#2EC69E] via-emerald-400 to-[#2EC69E]',
    echo_icon_bg: 'bg-[#2EC69E]/10',
    note_text_color: 'text-[#2EC69E]/70',
    logo_bg_class: 'bg-[#2EC69E]',
    stat_idx1_bg_border_text: 'bg-[#2EC69E]/20 text-emerald-400',
    stat_idx2_bg_border_text: 'bg-[#2EC69E]/10 text-gray-400',
    weapon_sig_card_border: 'border-[#2EC69E]/10 hover:border-[#2EC69E]/30',
    weapon_alt_card_border: 'border-white/5 hover:border-[#2EC69E]/20',
    weapon_sig_badge: 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30',
    weapon_alt_badge: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
    team_premium_border: 'border-[#2EC69E]/10',
    team_premium_badge: 'text-emerald-400',
    priority_highlight_text: 'text-emerald-400 font-bold',
    priority_high_text: 'text-emerald-300 font-semibold',
    sequence_filter: 'brightness(0) invert(1) drop-shadow(0 0 3px rgba(46, 198, 158, 0.9))'
  },
  Havoc: {
    selection_theme: 'selection:bg-[#971654]/30 selection:text-rose-200',
    glow_color_top: 'bg-[#971654]/10',
    glow_color_bottom: 'bg-rose-950/5',
    header_border_theme: 'border-[#971654]/10',
    gradient_accent: 'from-[#971654] to-rose-500',
    gradient_text_end: 'to-rose-400',
    accent_text: 'text-[#971654]',
    logo_shadow_theme: 'shadow-[#971654]/20',
    nav_active_classes: 'text-rose-400 bg-white/5 border-b-2 border-[#971654]/50',
    button_gradient: 'from-[#971654] to-rose-500',
    focus_ring_class: 'focus:ring-rose-800',
    mobile_button_gradient: 'from-[#971654] to-rose-600',
    mobile_button_shadow: 'shadow-[#971654]/25',
    hero_bg_class: 'from-[#971654]/20 to-[#1a181f]/40',
    hero_border_class: 'border-[#971654]/20',
    attribute_badge_theme: 'bg-[#971654]/20 text-rose-300 border border-[#971654]/30',
    role_badge_theme: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
    accent_gradient: 'from-[#971654] via-rose-400 to-[#971654]',
    echo_icon_bg: 'bg-[#971654]/10',
    note_text_color: 'text-[#971654]/70',
    logo_bg_class: 'bg-[#971654]',
    stat_idx1_bg_border_text: 'bg-[#971654]/20 text-rose-400',
    stat_idx2_bg_border_text: 'bg-[#971654]/10 text-gray-400',
    weapon_sig_card_border: 'border-[#971654]/10 hover:border-[#971654]/30',
    weapon_alt_card_border: 'border-white/5 hover:border-[#971654]/20',
    weapon_sig_badge: 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30',
    weapon_alt_badge: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
    team_premium_border: 'border-[#971654]/10',
    team_premium_badge: 'text-rose-400',
    priority_highlight_text: 'text-rose-400 font-bold',
    priority_high_text: 'text-rose-300 font-semibold',
    sequence_filter: 'brightness(0) invert(1) drop-shadow(0 0 3px rgba(151, 22, 84, 0.9))'
  },
  Glacio: {
    selection_theme: 'selection:bg-[#36AED0]/30 selection:text-cyan-200',
    glow_color_top: 'bg-[#36AED0]/10',
    glow_color_bottom: 'bg-cyan-950/5',
    header_border_theme: 'border-[#36AED0]/10',
    gradient_accent: 'from-[#36AED0] to-cyan-600',
    gradient_text_end: 'to-cyan-400',
    accent_text: 'text-[#36AED0]',
    logo_shadow_theme: 'shadow-[#36AED0]/20',
    nav_active_classes: 'text-[#36AED0] bg-white/5 border-b-2 border-[#36AED0]/50',
    button_gradient: 'from-[#36AED0] to-cyan-600',
    focus_ring_class: 'focus:ring-cyan-800',
    mobile_button_gradient: 'from-[#36AED0] to-cyan-700',
    mobile_button_shadow: 'shadow-[#36AED0]/25',
    hero_bg_class: 'from-[#36AED0]/20 to-[#1a181f]/40',
    hero_border_class: 'border-[#36AED0]/20',
    attribute_badge_theme: 'bg-[#36AED0]/20 text-[#36AED0] border border-[#36AED0]/30',
    role_badge_theme: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
    accent_gradient: 'from-[#36AED0] via-cyan-400 to-[#36AED0]',
    echo_icon_bg: 'bg-[#36AED0]/10',
    note_text_color: 'text-[#36AED0]/70',
    logo_bg_class: 'bg-[#36AED0]',
    stat_idx1_bg_border_text: 'bg-[#36AED0]/20 text-cyan-400',
    stat_idx2_bg_border_text: 'bg-[#36AED0]/10 text-gray-400',
    weapon_sig_card_border: 'border-[#36AED0]/10 hover:border-[#36AED0]/30',
    weapon_alt_card_border: 'border-white/5 hover:border-[#36AED0]/20',
    weapon_sig_badge: 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30',
    weapon_alt_badge: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
    team_premium_border: 'border-[#36AED0]/10',
    team_premium_badge: 'text-cyan-400',
    priority_highlight_text: 'text-cyan-400 font-bold',
    priority_high_text: 'text-cyan-300 font-semibold',
    sequence_filter: 'brightness(0) invert(1) drop-shadow(0 0 3px rgba(54, 174, 208, 0.9))'
  }
};

const charactersFilePath = path.join(__dirname, '../assets/data/characters.json');
const templateFilePath = path.join(__dirname, '../characters/template.html');
const weaponsFilePath = path.join(__dirname, '../assets/data/weapons.json');
const echoesFilePath = path.join(__dirname, '../assets/data/echoes.json');
const rolesFilePath = path.join(__dirname, '../assets/data/roles.json');
const sonatasFilePath = path.join(__dirname, '../assets/data/sonatas.json');

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
if (!fs.existsSync(rolesFilePath)) {
  console.error(`Error: File not found at ${rolesFilePath}`);
  process.exit(1);
}
if (!fs.existsSync(sonatasFilePath)) {
  console.error(`Error: File not found at ${sonatasFilePath}`);
  process.exit(1);
}

const rawCharacters = JSON.parse(fs.readFileSync(charactersFilePath, 'utf8'));
const template = fs.readFileSync(templateFilePath, 'utf8');
const weaponsMaster = JSON.parse(fs.readFileSync(weaponsFilePath, 'utf8'));
const echoesMaster = JSON.parse(fs.readFileSync(echoesFilePath, 'utf8'));
const rolesMaster = JSON.parse(fs.readFileSync(rolesFilePath, 'utf8'));
const sonatasMaster = JSON.parse(fs.readFileSync(sonatasFilePath, 'utf8'));

// Resolve relationships on characters
const characters = rawCharacters.map(char => {
  const resolvedChar = JSON.parse(JSON.stringify(char));
  
  // Resolve roles
  if (char.roles) {
    resolvedChar.roles = char.roles.map(roleId => {
      const master = rolesMaster[roleId];
      return {
        id: roleId,
        name: master ? master.name : { en: roleId }
      };
    });
  } else {
    resolvedChar.roles = [];
  }

  // Resolve weapons
  if (char.recommWeapons) {
    resolvedChar.recommWeapons = char.recommWeapons.map(wRef => {
      const master = weaponsMaster[wRef.id];
      if (!master) {
        console.warn(`Warning: Master weapon "${wRef.id}" not found for resonator "${char.id}".`);
        return wRef;
      }
      return {
        ...wRef,
        name: master.name,
        rarity: master.rarity,
        specs: {
          en: `Base ATK: ${master.baseAtk} • ${master.secondaryStat.en} (Lvl 90)`
        },
        desc: master.desc
      };
    });
  } else {
    resolvedChar.recommWeapons = [];
  }

  // Resolve echoes set
  if (char.recommEcho) {
    const recommEchoes = Array.isArray(char.recommEcho) ? char.recommEcho : [char.recommEcho];
    resolvedChar.recommEcho = recommEchoes.map(echo => {
      const setBonusId = echo.sonata;
      const masterSonata = sonatasMaster[setBonusId];
      const sonataObject = masterSonata ? {
        id: setBonusId,
        name: masterSonata.name,
        textColor: masterSonata.textColor,
        bgColor: masterSonata.bgColor,
        effect_2pc: masterSonata.effect_2pc,
        effect_5pc: masterSonata.effect_5pc
      } : { id: setBonusId, name: { en: "Custom Set" }, textColor: "#FFFFFF", bgColor: "#FFFFFF1a", effect_2pc: { en: "" }, effect_5pc: { en: "" } };

      const mainEchoId = echo.mainSlotEcho;
      const masterEcho = echoesMaster[mainEchoId];
      const mainSlotEchoObject = masterEcho ? {
        id: mainEchoId,
        name: masterEcho.name,
        costType: masterEcho.costType
      } : { id: mainEchoId, name: { en: mainEchoId }, costType: "4" };

      return {
        ...echo,
        sonataObject,
        mainSlotEchoObject
      };
    });
  }

  return resolvedChar;
});



characters.forEach(char => {
  console.log(`Compiling guide details for ${char.name.en}...`);

  const styles = attributeStyles[char.attribute.en];
  if (!styles) {
    console.error(`Warning: Style profile not found for attribute "${char.attribute.en}". Skipping ${char.name.en}.`);
    return;
  }

  // Generate stars list
  let starsHtml = '';
  for (let i = 0; i < char.rarity; i++) {
    starsHtml += `<i class="fa-solid fa-star animate-pulse" ${i > 0 ? `style="animation-delay: ${0.2 * i}s"` : ''}></i>\n`;
  }

  // Generate character portrait HTML
  let charImagesDir = path.join(__dirname, '../assets/images/characters', char.id);
  let portraitSrc = `../../assets/images/characters/${char.id}/portrait.png`;
  let potraitSrc = `../../assets/images/characters/${char.id}/potrait.png`;
  
  if (char.id === 'rover_havoc' || char.id.startsWith('rover')) {
    const attrId = char.attribute.en.toLowerCase();
    charImagesDir = path.join(__dirname, '../assets/images/characters/rover', attrId);
    portraitSrc = `../../assets/images/characters/rover/${attrId}/portrait.png`;
    potraitSrc = `../../assets/images/characters/rover/${attrId}/potrait.png`;
  }

  let portraitHtml = `<div class="w-32 h-32 rounded-full bg-gradient-to-tr ${styles.accent_gradient} p-0.5 shadow-2xl ${styles.logo_shadow_theme} flex items-center justify-center overflow-hidden"><div class="w-full h-full rounded-full bg-[#1a181f] flex items-center justify-center"><i class="${char.icon_class} ${styles.accent_text} text-6xl"></i></div></div>`;
  if (fs.existsSync(charImagesDir)) {
    if (fs.existsSync(path.join(charImagesDir, 'portrait.png'))) {
      portraitHtml = `<img src="${portraitSrc}" alt="${char.name.en}" class="w-full h-full object-contain">`;
    } else if (fs.existsSync(path.join(charImagesDir, 'potrait.png'))) {
      portraitHtml = `<img src="${potraitSrc}" alt="${char.name.en}" class="w-full h-full object-contain">`;
    }
  }

  // Generate weapons list HTML
  const weaponsListHtml = char.recommWeapons.map(weapon => {
    const isSig = weapon.isSignature;
    const borderClass = isSig ? styles.weapon_sig_card_border : styles.weapon_alt_card_border;
    const badgeClass = isSig ? styles.weapon_sig_badge : styles.weapon_alt_badge;
    const iconClass = isSig ? "fa-solid fa-sparkles text-xl" : "fa-solid fa-shield-halved text-xl";
    const iconColor = isSig ? styles.accent_text : "text-gray-400";
    const iconBg = isSig ? styles.echo_icon_bg : "bg-gray-500/10";
    const borderIcon = isSig ? styles.hero_border_class : "border-white/10";

    // Check if weapon image exists
    const weaponImgPath = path.join(__dirname, '../assets/images/weapons', `${weapon.id}.png`);
    const weaponIconHtml = `<img src="../../assets/images/weapons/${weapon.id}.png" alt="${weapon.name.en}" class="w-full h-full object-contain p-1">`;

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
                  <p class="s-name flex-align-center text-xs text-gray-500 mt-1" style="font-size: calc(32 * var(--gpx));">${weapon.specs.en}</p>
                  <p class="text-xs text-gray-300 mt-2">
                    ${weapon.desc.en}
                  </p>
                </div>
              </div>
            </div>`;
  }).join('\n');

  // Generate stat priorities HTML
  const statPrioritiesHtml = char.recommStats.en.map((stat, index) => {
    const isFirst = index === 0;
    const numBg = isFirst ? styles.stat_idx1_bg_border_text : styles.stat_idx2_bg_border_text;
    return `            <div class="flex items-center gap-2 bg-[#0a080f]/50 p-2.5 rounded-lg border border-white/5">
              <span class="w-5 h-5 rounded-md ${numBg} font-bold font-mono flex items-center justify-center">${index + 1}</span>
              <span class="s-name flex-align-center font-semibold text-white" style="font-size: calc(32 * var(--gpx));">${stat}</span>
            </div>`;
  }).join('\n');

  // Generate skill priorities HTML
  const skillPrioritiesHtml = char.recommSkill.map((item, index) => {
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
  const recommendedTeamsHtml = char.recommTeammates.map(team => {
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

  // Generate roles HTML
  const rolesHtml = char.roles.map(r => {
    return `<span class="inline-flex items-center gap-1.5 bg-[#0a080f]/60 border border-white/10 px-2.5 py-1 rounded-full text-xs font-medium text-gray-200">
              <img src="../../assets/images/roles/${r.id}.png" class="w-4 h-4 object-contain" onerror="this.style.display='none';">
              <span>${r.name.en}</span>
            </span>`;
  }).join('\n');

  // Generate main echo HTML
  const primaryEcho = Array.isArray(char.recommEcho) ? char.recommEcho[0] : char.recommEcho;
  const echoObj = primaryEcho ? primaryEcho.mainSlotEchoObject : null;
  let mainEchoHtml = '';
  if (echoObj) {
    mainEchoHtml = `<img src="../../assets/images/echoes/${echoObj.id}.png" alt="${echoObj.name.en}" class="w-full h-full object-contain p-1">`;
  }

  // Generate sequence list HTML
  let sequenceListHtml = '';
  if (char.recommSequence) {
    sequenceListHtml = char.recommSequence.map((seq, index) => {
      const isRec = seq.isRecommended;
      const borderClass = isRec ? styles.weapon_sig_card_border : 'border-white/5';
      const badgeHtml = isRec ? `<span class="text-[10px] ${styles.attribute_badge_theme} px-1.5 py-0.5 rounded uppercase font-bold">Recommended</span>` : '';
      const stepIdx = index + 1;
      const seqName = seq.name.en;
      const seqDesc = seq.description.en;
      
      let seqImgSrc = `../../assets/images/characters/${char.id}/sequence/${stepIdx}.png`;
      if (char.id === 'rover_havoc' || char.id.startsWith('rover')) {
        const attrId = char.attribute.en.toLowerCase();
        seqImgSrc = `../../assets/images/characters/rover/${attrId}/sequence/${stepIdx}.png`;
      }

      return `            <div class="bg-[#0a080f]/50 p-4 rounded-xl border ${borderClass} flex gap-4 items-start transition-all">
              <div class="w-12 h-12 rounded-lg bg-[#0a080f] flex items-center justify-center shrink-0 border border-white/10 overflow-hidden relative p-1.5">
                <!-- Ambient Glow Backdrop -->
                <div class="absolute inset-0 bg-gradient-to-tr ${styles.accent_gradient} opacity-20 blur-[1px]"></div>
                <img src="${seqImgSrc}" alt="${seqName}" class="w-full h-full object-contain relative z-10" style="filter: ${styles.sequence_filter};">
              </div>
              <div class="flex-grow">
                <h4 class="text-sm font-bold text-white flex items-center justify-between gap-2">
                  <span>${seqName}</span>
                  ${badgeHtml}
                </h4>
                <p class="text-xs text-gray-400 mt-1 leading-relaxed">${seqDesc}</p>
              </div>
            </div>`;
    }).join('\n');
  }

  // Generate gameplay guide details HTML
  let guideDetailsHtml = '';
  if (char.guideDetails) {
    guideDetailsHtml = `<p class="text-sm text-gray-300 leading-relaxed">${char.guideDetails.en}</p>`;
  }

  // Apply substitutions to layout template
  let pageContent = template
    .replace(/{{name}}/g, char.name.en)
    .replace(/{{description}}/g, char.description.en)
    .replace(/{{attribute}}/g, char.attribute.en)
    .replace(/{{attribute_id}}/g, char.attribute.en.toLowerCase())
    .replace(/{{weaponType}}/g, char.weaponType.en)
    .replace(/{{weapon_type_id}}/g, char.weaponType.en.toLowerCase().replace(/s$/, ''))
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
    .replace(/{{attribute_badge_theme}}/g, styles.attribute_badge_theme)
    .replace(/{{sequence_filter}}/g, styles.sequence_filter)
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
    .replace(/{{roles}}/g, rolesHtml)
    .replace(/{{portrait_html}}/g, portraitHtml)
    .replace(/{{stars_html}}/g, starsHtml.trim())
    .replace(/{{weapons_list_html}}/g, weaponsListHtml)
    .replace(/{{sonata_name}}/g, primaryEcho ? (primaryEcho.sonataObject.name.en + " (5-Piece Set)") : "Custom Set")
    .replace(/{{sonata_effect_2pc}}/g, primaryEcho ? primaryEcho.sonataObject.effect_2pc.en : "")
    .replace(/{{sonata_effect_5pc}}/g, primaryEcho ? primaryEcho.sonataObject.effect_5pc.en : "")
    .replace(/{{main_echo_html}}/g, mainEchoHtml)
    .replace(/{{main_echo_name}}/g, primaryEcho ? primaryEcho.mainSlotEchoObject.name.en : "")
    .replace(/{{main_echo_cost}}/g, primaryEcho ? `${primaryEcho.mainSlotEchoObject.costType}-Cost` : "")
    .replace(/{{cost_4}}/g, primaryEcho ? primaryEcho.cost4.en : "")
    .replace(/{{cost_3}}/g, primaryEcho ? primaryEcho.cost3.en : "")
    .replace(/{{cost_1}}/g, primaryEcho ? primaryEcho.cost1.en : "")
    .replace(/{{substats_priority}}/g, primaryEcho ? primaryEcho.substatsPriority.en : "")
    .replace(/{{echo_note}}/g, primaryEcho ? primaryEcho.note.en : "")
    .replace(/{{stat_priorities_html}}/g, statPrioritiesHtml)
    .replace(/{{skill_priorities_html}}/g, skillPrioritiesHtml)
    .replace(/{{recommended_teams_html}}/g, recommendedTeamsHtml)
    .replace(/{{sequence_list_html}}/g, sequenceListHtml)
    .replace(/{{guide_details_html}}/g, guideDetailsHtml)
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
