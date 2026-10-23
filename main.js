/* studiomatt — shared behaviour: header + overlay menu + footer, curtain transition, i18n */

(function(){
  const page = document.body.dataset.page || '';

  /* ---------- i18n dictionary ---------- */
  const I18N = {
    en:{
      m_projects:'Portfolio', m_studio:'Studio', m_team:'Team', m_contact:'Contact',
      foot_rights:'© 2026 studiomatt gmbh — All rights reserved',
      leg_impressum:'Impressum', leg_privacy:'Privacy',
      /* home */
      h_kicker:'studiomatt — architecture &amp; interior atelier',
      h_q1:'Can interior and exterior become one?',
      h_q2:'Can sustainability be beautiful?',
      h_q3:'How modern can timeless architecture be?',
      h_q4:'Can contrasts create harmony?',
      h_q5:'When does space become an experience?',
      h_discover:'Discover',
      in_eyebrow:'Welcome to studiomatt', in_title:'We think space,<br>then we build it.',
      in_lead:'An atelier for architecture and interior design — guiding every project with method and passion, from the very first thought to the keys in your hand.',
      in_p1:'Re-founded in 2020 by Attilio Lavezzari and based in Kriens, studiomatt brings together an interdisciplinary team built on a network of trusted collaborations. We accompany every project through all phases of design and construction.',
      st_founded:'Founded', st_studio:'Studio · Mattenhof', st_a2z:'Thought to handover',
      fw_eyebrow:'Selected work', fw_title:'Recent projects', fw_viewall:'View all',
      cta_eyebrow:'Get in touch', cta_title:'Every great space begins with a conversation.',
      cta_title2:"Let's talk about your project.", cta_start:'Start a project', cta_contact:'Contact us',
      /* projects + categories */
      c_mattenhof:'New build · Kriens', c2_mattenhof:'New build · Kriens · 2024', n_mattenhof:'Mattenhof',
      c_bossard:'Extension · Zug', n_bossard:'Bossard Arena',
      c_villa:'Interior · Oberägeri', n_villa:'Lakeside Villa',
      c_square:'Renovation · Winterthur', n_square:'Square One',
      c_luce:'Interior · Cremia', n_luce:'Apartment Luce',
      c_aegeri:'Extension · Wettingen', n_aegeri:'Tägi',
      c_herti:'New build · Winterthur', n_herti:'Winterthur',
      pj_kicker:'Selected work', pj_h1:'Spaces we have thought &amp; built.',
      pj_eyebrow:'Portfolio', pj_title:'New builds · Renovations · Interiors',
      pj_intro:'A selection of recent projects across architecture and interior design.',
      /* project detail */

      d_loc:'Location', d_year:'Year', d_type:'Type', d_scope:'Scope',

      d_next:'Next project',
      /* about */
      ab_kicker:'The studio', ab_h1:'An atelier for architecture &amp; interiors.',
      ab_eyebrow:'Who we are', ab_title:'From the first<br>thought to<br>the keys.',
      ab_lead:'We develop tailor-made living spaces where dialogue and collaboration are at the centre of everything we do.',
      ab_p1:'After many years of work in various architecture practices in Switzerland and abroad, studiomatt was re-founded in 2020 by Attilio Lavezzari, based in Kriens. We take on assignments of every kind together with an interdisciplinary team, built on a network of trusted collaborations.',
      ab_p2:"We draft the first design thoughts and guide the team through all construction phases and a wide range of delivery models — from the initial strategic considerations to the handover to the client. We support our clients in reaching efficient, sustainable and contemporary decisions, and where needed we also take on the client's own tasks to ease their workload.",
      ab_p3:'In mid-2023 studiomatt took a further important step, moving into larger premises. The new office at the Mattenhof in Kriens — with an urban view over the Mattenhofplatz — offers, thanks to more space and state-of-the-art infrastructure, the ideal conditions for interdisciplinary exchange within the team and for more demanding planning work.',
      ab_st1:'Re-founded', ab_st2:'Mattenhof office', ab_st3:'Team members',
      ap_eyebrow:'Our approach', ap_title:'Method &amp; passion,<br>in equal measure.',
      ap_p:'We believe great architecture is born from listening. Every brief is a conversation; every space, a shared answer. We plan and build both with routine and with care — for results that are functional, sustainable and quietly emotional.',
      /* team */
      t_kicker:'The team', t_h1:'The people behind the work.',
      t_eyebrow:'Interdisciplinary', t_title:'A team that works side by side.',
      t_intro:'Architects, engineers and designers, each bringing their own expertise to the project — from the first sketch to the finished space.',
      tw:'Write', 
      t_internal:'Team', t_external:'External collaborators', r_cleaning:'Cleaning',
      r_founder:'Founder, studiomatt<br>Architect HTL · SIA', r_arch_htl:'Architect HTL',
      r_arch_dplg:'Architecte D.P.L.G.', r_eng:'M.Sc. Building Engineering<br>&amp; Architecture',
      r_ba:'BA Architecture FHZ<br>BA Interior Design FHZ', r_sceno:'M.A. Scenography<br>Academy of Fine Arts',
      r_draft:'Draftsman<br>Architecture', r_admin:'Accounting<br>&amp; Human Resources',
      /* contact */
      k_kicker:'Get in touch', k_h1:"Let's talk about your project.",
      k_eyebrow:'Contact', k_title:'Every great space begins with a conversation.',
      k_lede:"Tell us about your idea — we'll be glad to listen, and to think it through with you.",
      i_studio:'Studio', i_phone:'Phone', i_follow:'Follow',
      i_addr:'studiomatt<br>Am Mattenhof 16a<br>6010 Kriens · Switzerland'
    },
    it:{
      m_projects:'Portfolio', m_studio:'Studio', m_team:'Team', m_contact:'Contatti',
      foot_rights:'© 2026 studiomatt gmbh — Tutti i diritti riservati',
      leg_impressum:'Impressum', leg_privacy:'Privacy',
      h_kicker:'studiomatt — atelier di architettura e interni',
      h_q1:'Lo spazio interno e quello esterno possono diventare uno?',
      h_q2:'La sostenibilità può essere estetica?',
      h_q3:"Quanto può essere moderna un'architettura senza tempo?",
      h_q4:'I contrasti possono generare armonia?',
      h_q5:'Quando lo spazio diventa esperienza?',
      h_discover:'Scopri',
      in_eyebrow:'Benvenuti in studiomatt', in_title:'Pensiamo lo spazio,<br>poi lo costruiamo.',
      in_lead:'Un atelier di architettura e interior design — guidiamo ogni progetto con metodo e passione, dal primo pensiero alle chiavi in mano.',
      in_p1:'Rifondata nel 2020 da Attilio Lavezzari e con sede a Kriens, studiomatt riunisce un team interdisciplinare costruito su una rete di collaborazioni consolidate. Accompagniamo ogni progetto in tutte le fasi di progettazione e costruzione.',
      st_founded:'Fondazione', st_studio:'Sede · Mattenhof', st_a2z:'Dal pensiero alla consegna',
      fw_eyebrow:'Lavori selezionati', fw_title:'Progetti recenti', fw_viewall:'Vedi tutti',
      cta_eyebrow:'Contattaci', cta_title:'Ogni grande spazio nasce da una conversazione.',
      cta_title2:'Parliamo del vostro progetto.', cta_start:'Inizia un progetto', cta_contact:'Contattaci',
      c_mattenhof:'Nuova costruzione · Kriens', c2_mattenhof:'Nuova costruzione · Kriens · 2024', n_mattenhof:'Mattenhof',
      c_bossard:'Ampliamento · Zugo', n_bossard:'Bossard Arena',
      c_villa:'Interni · Oberägeri', n_villa:'Villa sul lago',
      c_square:'Ristrutturazione · Winterthur', n_square:'Square One',
      c_luce:'Interni · Cremia', n_luce:'Appartamento Luce',
      c_aegeri:'Ampliamento · Wettingen', n_aegeri:'Tägi',
      c_herti:'Nuova costruzione · Winterthur', n_herti:'Winterthur',
      pj_kicker:'Lavori selezionati', pj_h1:'Spazi che abbiamo pensato e costruito.',
      pj_eyebrow:'Portfolio', pj_title:'Nuove costruzioni · Ristrutturazioni · Interni',
      pj_intro:'Una selezione di progetti recenti tra architettura e interior design.',

      d_loc:'Luogo', d_year:'Anno', d_type:'Tipologia', d_scope:'Ambito',

      d_next:'Progetto successivo',
      ab_kicker:'Lo studio', ab_h1:'Un atelier di architettura e interni.',
      ab_eyebrow:'Chi siamo', ab_title:'Dal primo<br>pensiero alle<br>chiavi.',
      ab_lead:'Sviluppiamo spazi di vita su misura, dove dialogo e collaborazione sono al centro di tutto ciò che facciamo.',
      ab_p1:"Dopo molti anni di lavoro in diversi studi di architettura in Svizzera e all'estero, studiomatt è stata rifondata nel 2020 da Attilio Lavezzari, con sede a Kriens. Affrontiamo incarichi di ogni natura insieme a un team interdisciplinare, costruito su una rete di collaborazioni consolidate.",
      ab_p2:'Elaboriamo le prime riflessioni progettuali e guidiamo il team attraverso tutte le fasi costruttive e i più diversi modelli di realizzazione — dalle considerazioni strategiche iniziali fino alla consegna al committente. Sosteniamo i nostri clienti per arrivare a decisioni efficienti, sostenibili e contemporanee, assumendo dove serve anche compiti propri della committenza.',
      ab_p3:"A metà 2023 studiomatt ha compiuto un ulteriore passo importante, trasferendosi in spazi più ampi. Il nuovo ufficio al Mattenhof di Kriens — con vista urbana sulla Mattenhofplatz — offre, grazie a più spazio e a un'infrastruttura all'avanguardia, le condizioni ideali per lo scambio nel team e per il lavoro progettuale più impegnativo.",
      ab_st1:'Rifondazione', ab_st2:'Ufficio Mattenhof', ab_st3:'Persone nel team',
      ap_eyebrow:'Il nostro approccio', ap_title:'Metodo e passione,<br>in egual misura.',
      ap_p:"Crediamo che la buona architettura nasca dall'ascolto. Ogni incarico è una conversazione; ogni spazio, una risposta condivisa. Progettiamo e costruiamo con metodo e con cura — per risultati funzionali, sostenibili e silenziosamente emozionanti.",
      t_kicker:'Il team', t_h1:'Le persone dietro il lavoro.',
      t_eyebrow:'Interdisciplinare', t_title:'Un team che lavora fianco a fianco.',
      t_intro:'Architetti, ingegneri e progettisti, ciascuno con la propria competenza al servizio del progetto — dal primo schizzo allo spazio finito.',
      tw:'Scrivici',
      t_internal:'Collaboratori interni', t_external:'Collaboratori esterni', r_cleaning:'Pulizie',
      r_founder:'Titolare, studiomatt<br>Architetto HTL · SIA', r_arch_htl:'Architetto HTL',
      r_arch_dplg:'Architecte D.P.L.G.', r_eng:'Laurea magistrale<br>Ingegneria edile-architettura',
      r_ba:'BA Architettura FHZ<br>BA Interior Design FHZ', r_sceno:'Laurea magistrale in scenografia<br>Accademia di Belle Arti',
      r_draft:'Disegnatore<br>Architettura', r_admin:'Amministrazione<br>&amp; Risorse umane',
      k_kicker:'Contattaci', k_h1:'Parliamo del vostro progetto.',
      k_eyebrow:'Contatti', k_title:'Ogni grande spazio nasce da una conversazione.',
      k_lede:'Raccontateci la vostra idea — saremo felici di ascoltarla e di pensarla insieme a voi.',
      i_studio:'Studio', i_phone:'Telefono', i_follow:'Seguici',
      i_addr:'studiomatt<br>Am Mattenhof 16a<br>6010 Kriens · Svizzera'
    },
    de:{
      m_projects:'Portfolio', m_studio:'Studio', m_team:'Team', m_contact:'Kontakt',
      foot_rights:'© 2026 studiomatt gmbh — Alle Rechte vorbehalten',
      leg_impressum:'Impressum', leg_privacy:'Datenschutz',
      h_kicker:'studiomatt — Atelier für Architektur &amp; Innenarchitektur',
      h_q1:'Können Innenraum und Aussenraum eins werden?',
      h_q2:'Kann Nachhaltigkeit ästhetisch sein?',
      h_q3:'Wie modern kann zeitlose Architektur sein?',
      h_q4:'Können Kontraste Harmonie erzeugen?',
      h_q5:'Wann wird Raum zum Erlebnis?',
      h_discover:'Entdecken',
      in_eyebrow:'Willkommen bei studiomatt', in_title:'Wir denken den Raum,<br>dann bauen wir ihn.',
      in_lead:'Ein Atelier für Architektur und Innenarchitektur — wir begleiten jedes Projekt mit Methode und Leidenschaft, vom ersten Gedanken bis zur Schlüsselübergabe.',
      in_p1:'2020 von Attilio Lavezzari neu gegründet und in Kriens ansässig, vereint studiomatt ein interdisziplinäres Team aus einem bewährten Netzwerk. Wir begleiten jedes Projekt durch sämtliche Phasen von Planung und Bau.',
      st_founded:'Gegründet', st_studio:'Atelier · Mattenhof', st_a2z:'Vom Gedanken zur Übergabe',
      fw_eyebrow:'Ausgewählte Arbeiten', fw_title:'Aktuelle Projekte', fw_viewall:'Alle ansehen',
      cta_eyebrow:'Kontakt aufnehmen', cta_title:'Jeder grosse Raum beginnt mit einem Gespräch.',
      cta_title2:'Sprechen wir über Ihr Projekt.', cta_start:'Projekt starten', cta_contact:'Kontaktieren Sie uns',
      c_mattenhof:'Neubau · Kriens', c2_mattenhof:'Neubau · Kriens · 2024', n_mattenhof:'Mattenhof',
      c_bossard:'Erweiterung · Zug', n_bossard:'Bossard Arena',
      c_villa:'Innenausbau · Oberägeri', n_villa:'Villa am See',
      c_square:'Umbau · Winterthur', n_square:'Square One',
      c_luce:'Innenausbau · Cremia', n_luce:'Wohnung Luce',
      c_aegeri:'Erweiterung · Wettingen', n_aegeri:'Tägi',
      c_herti:'Neubau · Winterthur', n_herti:'Winterthur',
      pj_kicker:'Ausgewählte Arbeiten', pj_h1:'Räume, die wir gedacht und gebaut haben.',
      pj_eyebrow:'Portfolio', pj_title:'Neubauten · Umbauten · Innenausbau',
      pj_intro:'Eine Auswahl aktueller Projekte aus Architektur und Innenarchitektur.',

      d_loc:'Ort', d_year:'Jahr', d_type:'Typ', d_scope:'Leistungen',

      d_next:'Nächstes Projekt',
      ab_kicker:'Das Atelier', ab_h1:'Ein Atelier für Architektur &amp; Innenräume.',
      ab_eyebrow:'Über uns', ab_title:'Vom ersten<br>Gedanken zum<br>Schlüssel.',
      ab_lead:'Wir entwickeln massgeschneiderte Lebensräume, in denen Dialog und Miteinander im Mittelpunkt stehen.',
      ab_p1:'Nach langjähriger Arbeit in verschiedenen Architekturbüros im In- und Ausland wurde studiomatt 2020 von Attilio Lavezzari mit Sitz in Kriens neu gegründet. Wir übernehmen Aufgaben jeder Art zusammen mit einem interdisziplinären Team aus einem bewährten Netzwerk.',
      ab_p2:'Wir verfassen die ersten Denkarbeiten und leiten das Team durch sämtliche Bauphasen und unterschiedlichste Ausführungsmodelle — von den ersten strategischen Überlegungen bis zur Übergabe an die Bauherrschaft. Wir unterstützen unsere Kunden bei effizienten, nachhaltigen und zeitgemässen Entscheidungen und übernehmen bei Bedarf auch Bauherrenaufgaben.',
      ab_p3:'Mitte 2023 ging studiomatt einen weiteren wichtigen Schritt und zog in grössere Räumlichkeiten. Das neue Büro am Mattenhof in Kriens — mit urbanem Blick über die Mattenhofplatz — bietet dank mehr Platz und modernster Infrastruktur ideale Bedingungen für den Austausch im Team und für anspruchsvollere Planungsarbeiten.',
      ab_st1:'Neugründung', ab_st2:'Büro Mattenhof', ab_st3:'Teammitglieder',
      ap_eyebrow:'Unser Ansatz', ap_title:'Methode &amp; Leidenschaft,<br>zu gleichen Teilen.',
      ap_p:'Wir glauben, dass gute Architektur aus dem Zuhören entsteht. Jeder Auftrag ist ein Gespräch, jeder Raum eine gemeinsame Antwort. Wir planen und bauen routiniert und sorgfältig — für Ergebnisse, die funktional, nachhaltig und leise emotional sind.',
      t_kicker:'Das Team', t_h1:'Die Menschen hinter der Arbeit.',
      t_eyebrow:'Interdisziplinär', t_title:'Ein Team, das Hand in Hand arbeitet.',
      t_intro:'Architekten, Ingenieure und Gestalter, jede und jeder mit eigener Kompetenz im Dienst des Projekts — von der ersten Skizze bis zum fertigen Raum.',
      tw:'Schreiben',
      t_internal:'Mitarbeiter', t_external:'Externe Mitarbeiter', r_cleaning:'Reinigung',
      r_founder:'Inhaber, studiomatt<br>Architekt HTL · SIA', r_arch_htl:'Architekt HTL',
      r_arch_dplg:'Architecte D.P.L.G.', r_eng:'Master Bauingenieurwesen<br>&amp; Architektur',
      r_ba:'BA Architektur FHZ<br>BA Innenarchitektur FHZ', r_sceno:'Master Szenografie<br>Akademie der bildenden Künste',
      r_draft:'Zeichner<br>Architektur', r_admin:'Rechnungswesen<br>&amp; Human Resources',
      k_kicker:'Kontakt aufnehmen', k_h1:'Sprechen wir über Ihr Projekt.',
      k_eyebrow:'Kontakt', k_title:'Jeder grosse Raum beginnt mit einem Gespräch.',
      k_lede:'Erzählen Sie uns von Ihrer Idee — wir hören gerne zu und denken sie mit Ihnen weiter.',
      i_studio:'Atelier', i_phone:'Telefon', i_follow:'Folgen',
      i_addr:'studiomatt<br>Am Mattenhof 16a<br>6010 Kriens · Schweiz'
    }
  };

  /* ---------- vector logo (crisp + animatable) ---------- */
  function logoSVG(cls){
    const a=(cls||'').indexOf('clogo')>-1, wi=a?' opacity="0"':'', mi=a?' stroke-dasharray="1" stroke-dashoffset="1"':'';
    return `<svg class="${cls}" viewBox="0 0 344 79" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" aria-label="studiomatt">
<defs>
<g>
<g id="glyph-0-0">
<path d="M 19.328125 -20.203125 C 17.796875 -23.3125 14.6875 -24.484375 11.375 -24.484375 C 6.890625 -24.484375 2.546875 -22.234375 2.546875 -17.28125 C 2.546875 -12.75 7.03125 -11.421875 8.671875 -11.015625 L 11.9375 -10.25 C 14.4375 -9.640625 16.46875 -8.828125 16.46875 -6.421875 C 16.46875 -3.671875 13.609375 -2.453125 10.859375 -2.453125 C 8.0625 -2.453125 5.96875 -3.875 4.59375 -6.015625 L 1.6875 -4.03125 C 3.921875 -0.65625 7.234375 0.609375 10.859375 0.609375 C 15.5 0.609375 20.140625 -1.53125 20.140625 -6.734375 C 20.140625 -10.09375 17.640625 -12.5 14.328125 -13.265625 L 10.90625 -14.078125 C 7.796875 -14.796875 6.21875 -15.609375 6.21875 -17.84375 C 6.21875 -20.40625 8.828125 -21.421875 11.171875 -21.421875 C 13.609375 -21.421875 15.296875 -20.140625 16.3125 -18.203125 Z M 19.328125 -20.203125 "/>
</g>
<g id="glyph-0-1">
<path d="M 16.015625 -23.875 L 9.125 -23.875 L 9.125 -30.59375 L 5.765625 -30.59375 L 5.765625 -23.875 L 0.71875 -23.875 L 0.71875 -20.8125 L 5.765625 -20.8125 L 5.765625 -5.765625 C 5.765625 -0.515625 9.125 0.609375 11.671875 0.609375 C 13.359375 0.609375 15 0.3125 16.21875 -0.25 L 16.0625 -3.359375 C 15.046875 -2.8125 13.765625 -2.453125 12.59375 -2.453125 C 10.5 -2.453125 9.125 -3.15625 9.125 -6.734375 L 9.125 -20.8125 L 16.015625 -20.8125 Z M 16.015625 -23.875 "/>
</g>
<g id="glyph-0-2">
<path d="M 24.375 0 C 24.28125 -1.734375 24.125 -3.984375 24.125 -5.25 L 24.125 -23.875 L 20.75 -23.875 L 20.75 -11.625 C 20.75 -2.90625 14.234375 -2.453125 13.515625 -2.453125 C 8.515625 -2.453125 7.03125 -5.359375 7.03125 -10.65625 L 7.03125 -23.875 L 3.671875 -23.875 L 3.671875 -8.71875 C 3.671875 -2.8125 6.578125 0.609375 12.640625 0.609375 C 15.8125 0.609375 19.171875 -1.21875 20.65625 -3.828125 L 20.75 -3.828125 C 20.75 -2.546875 20.75 -1.28125 20.90625 0 Z M 24.375 0 "/>
</g>
<g id="glyph-0-3">
<path d="M 27.484375 -38.5625 L 24.125 -38.5625 L 24.125 -19.890625 L 24.015625 -19.890625 C 21.828125 -23.109375 17.90625 -24.484375 14.734375 -24.484375 C 7.296875 -24.484375 2.046875 -19.125 2.046875 -11.9375 C 2.046875 -4.75 7.296875 0.609375 14.734375 0.609375 C 17.90625 0.609375 21.828125 -0.765625 24.015625 -3.984375 L 24.125 -3.984375 L 24.125 0 L 27.484375 0 Z M 5.71875 -11.9375 C 5.71875 -17.28125 9.1875 -21.421875 14.734375 -21.421875 C 20.25 -21.421875 24.28125 -17.28125 24.28125 -11.9375 C 24.28125 -6.578125 20.25 -2.453125 14.734375 -2.453125 C 9.1875 -2.453125 5.71875 -6.578125 5.71875 -11.9375 Z M 5.71875 -11.9375 "/>
</g>
<g id="glyph-0-4">
<path d="M 7.796875 -23.875 L 4.4375 -23.875 L 4.4375 0 L 7.796875 0 Z M 8.5625 -33.046875 C 8.5625 -34.46875 7.34375 -35.5 6.125 -35.5 C 4.890625 -35.5 3.671875 -34.46875 3.671875 -33.046875 C 3.671875 -31.625 4.890625 -30.59375 6.125 -30.59375 C 7.34375 -30.59375 8.5625 -31.625 8.5625 -33.046875 Z M 8.5625 -33.046875 "/>
</g>
<g id="glyph-0-5">
<path d="M 27.796875 -11.9375 C 27.796875 -19.125 22.546875 -24.484375 15.09375 -24.484375 C 7.703125 -24.484375 2.453125 -19.125 2.453125 -11.9375 C 2.453125 -4.75 7.703125 0.609375 15.09375 0.609375 C 22.546875 0.609375 27.796875 -4.75 27.796875 -11.9375 Z M 24.125 -11.9375 C 24.125 -6.578125 20.65625 -2.453125 15.09375 -2.453125 C 9.59375 -2.453125 6.125 -6.578125 6.125 -11.9375 C 6.125 -17.28125 9.59375 -21.421875 15.09375 -21.421875 C 20.65625 -21.421875 24.125 -17.28125 24.125 -11.9375 Z M 24.125 -11.9375 "/>
</g>
<g id="glyph-0-6">
<path d="M 3.671875 0 L 7.03125 0 L 7.03125 -12.234375 C 7.03125 -20.96875 12.953125 -21.421875 13.765625 -21.421875 C 18.40625 -21.421875 19.78125 -18.765625 19.78125 -13.921875 L 19.78125 0 L 23.15625 0 L 23.15625 -12.703125 C 23.15625 -17.140625 24.890625 -21.421875 29.890625 -21.421875 C 34.53125 -21.421875 35.90625 -18.765625 35.90625 -13.921875 L 35.90625 0 L 39.265625 0 L 39.265625 -15.140625 C 39.265625 -21.0625 36.359375 -24.484375 30.296875 -24.484375 C 27.078125 -24.484375 23.8125 -22.59375 22.4375 -19.53125 C 20.859375 -23.609375 17.4375 -24.484375 14.84375 -24.484375 C 11.984375 -24.484375 8.765625 -23 7.140625 -20.25 L 7.03125 -20.25 L 7.03125 -23.875 L 3.421875 -23.875 C 3.515625 -22.078125 3.671875 -20.34375 3.671875 -18.5625 Z M 3.671875 0 "/>
</g>
<g id="glyph-0-7">
<path d="M 17.28125 -14.640625 C 11.578125 -14.640625 2.453125 -14.125 2.453125 -6.375 C 2.453125 -1.734375 6.421875 0.609375 10.65625 0.609375 C 14.484375 0.609375 17.140625 -0.71875 19.078125 -3.875 L 19.171875 -3.875 C 19.171875 -2.59375 19.28125 -1.171875 19.484375 0 L 22.75 0 C 22.546875 -1.28125 22.34375 -3.515625 22.34375 -5.359375 L 22.34375 -16.015625 C 22.34375 -21.828125 18.3125 -24.484375 13.609375 -24.484375 C 9.125 -24.484375 5.71875 -23.25 3.515625 -21.015625 L 5.5625 -18.609375 C 7.59375 -20.453125 10.046875 -21.421875 12.859375 -21.421875 C 16.984375 -21.421875 18.96875 -19.375 18.96875 -15.25 L 18.96875 -14.640625 Z M 18.96875 -11.890625 L 18.96875 -10.15625 C 18.96875 -5.921875 16.625 -2.453125 11.734375 -2.453125 C 9.03125 -2.453125 6.125 -3.671875 6.125 -6.828125 C 6.125 -11.625 13.828125 -11.890625 17.234375 -11.890625 Z M 18.96875 -11.890625 "/>
</g>
</g>
</defs>
<g class="word" fill="currentColor"${wi}>
<use xlink:href="#glyph-0-0" x="80.832" y="58.8213"/>
<use xlink:href="#glyph-0-1" x="102.66" y="58.8213"/>
<use xlink:href="#glyph-0-2" x="119.745" y="58.8213"/>
<use xlink:href="#glyph-0-3" x="148.203" y="58.8213"/>
<use xlink:href="#glyph-0-4" x="179.466" y="58.8213"/>
<use xlink:href="#glyph-0-5" x="191.859" y="58.8213"/>
<use xlink:href="#glyph-0-6" x="222.255" y="58.8213"/>
<use xlink:href="#glyph-0-7" x="265.86" y="58.8213"/>
<use xlink:href="#glyph-0-1" x="292.482" y="58.8213"/>
<use xlink:href="#glyph-0-1" x="309.567" y="58.8213"/>
</g>
<g class="mark" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linejoin="miter" stroke-linecap="butt"${mi}>
<rect pathLength="1" x="23.719" y="27.145" width="33" height="33"/>
<circle pathLength="1" cx="40.194" cy="40.146" r="20"/>
</g>
</svg>`;
  }

  /* ---------- extra dictionary: cookie banner · map · legal pages ---------- */
  const I18N2 = {
    en:{
      ck_text:'We use cookies and external services to improve your experience and show our location. Necessary cookies are always active.',
      ck_more:'Privacy policy', ck_accept:'Accept all', ck_necessary:'Necessary only',
      mp_eyebrow:'Find us', mp_title:'How to reach the studio',
      mp_consent:'The map is loaded from Google Maps. By loading it you accept that data may be transmitted to Google.',
      mp_load:'Load map', mp_cap:'Directions', mp_openmaps:'Open in Google Maps',
      im_eyebrow:'Legal', im_title:'Imprint', im_h_company:'Responsible', im_h_contact:'Contact',

      im_h_disclaimer:'Disclaimer', im_disclaimer:'The contents of this website are compiled with the greatest possible care. However, we assume no liability for the accuracy, completeness or timeliness of the content provided.',
      im_h_links:'Liability for links', im_links:'Our website may contain links to external third-party websites over whose content we have no influence. We therefore accept no liability for such external content. The respective provider is always responsible for the content of linked pages.',
      im_h_copyright:'Copyright', im_copyright:'The content and works on this website are protected by copyright. Any reproduction, processing or distribution outside the limits of copyright requires the prior written consent of studiomatt GmbH.',
      im_note:'This imprint is a template and should be reviewed and completed by a qualified professional before publication.',

      dp_r1:'access the personal data we hold about you', dp_r2:'rectify inaccurate data', dp_r3:'request deletion of your data',
      dp_r4:'restrict or object to processing', dp_r5:'lodge a complaint with the competent supervisory authority',

    },
    it:{
      ck_text:'Utilizziamo cookie e servizi esterni per migliorare la tua esperienza e mostrare la nostra sede. I cookie necessari sono sempre attivi.',
      ck_more:'Informativa privacy', ck_accept:'Accetta tutto', ck_necessary:'Solo necessari',
      mp_eyebrow:'Dove siamo', mp_title:'Come raggiungere lo studio',
      mp_consent:'La mappa viene caricata da Google Maps. Caricandola accetti che alcuni dati possano essere trasmessi a Google.',
      mp_load:'Carica la mappa', mp_cap:'Come arrivare', mp_openmaps:'Apri in Google Maps',
      im_eyebrow:'Note legali', im_title:'Impressum', im_h_company:'Responsabile', im_h_contact:'Contatti',

      im_h_disclaimer:'Esclusione di responsabilità', im_disclaimer:'I contenuti di questo sito sono redatti con la massima cura possibile. Tuttavia non ci assumiamo alcuna responsabilità per l\u2019esattezza, la completezza o l\u2019attualità delle informazioni fornite.',
      im_h_links:'Responsabilità per i link', im_links:'Il sito può contenere collegamenti a siti esterni di terzi sui cui contenuti non abbiamo alcuna influenza. Non ci assumiamo pertanto alcuna responsabilità per tali contenuti esterni. Per i contenuti delle pagine collegate è sempre responsabile il rispettivo gestore.',
      im_h_copyright:'Copyright', im_copyright:'I contenuti e le opere presenti su questo sito sono protetti dal diritto d\u2019autore. Qualsiasi riproduzione, elaborazione o diffusione oltre i limiti del diritto d\u2019autore richiede il previo consenso scritto di studiomatt GmbH.',
      im_note:'Questo impressum è un modello e deve essere verificato e completato da un professionista qualificato prima della pubblicazione.',

      dp_r1:'accedere ai dati personali che ti riguardano', dp_r2:'rettificare i dati inesatti', dp_r3:'richiedere la cancellazione dei tuoi dati',
      dp_r4:'limitare o opporti al trattamento', dp_r5:'presentare reclamo all\u2019autorità di controllo competente',

    },
    de:{
      ck_text:'Wir verwenden Cookies und externe Dienste, um Ihr Erlebnis zu verbessern und unseren Standort anzuzeigen. Notwendige Cookies sind immer aktiv.',
      ck_more:'Datenschutzerklärung', ck_accept:'Alle akzeptieren', ck_necessary:'Nur notwendige',
      mp_eyebrow:'Anfahrt', mp_title:'So erreichen Sie das Atelier',
      mp_consent:'Die Karte wird von Google Maps geladen. Mit dem Laden akzeptieren Sie, dass Daten an Google übermittelt werden können.',
      mp_load:'Karte laden', mp_cap:'Anfahrt', mp_openmaps:'In Google Maps öffnen',
      im_eyebrow:'Rechtliches', im_title:'Impressum', im_h_company:'Verantwortlich', im_h_contact:'Kontakt',

      im_h_disclaimer:'Haftungsausschluss', im_disclaimer:'Die Inhalte dieser Website werden mit grösstmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte übernehmen wir jedoch keine Gewähr.',
      im_h_links:'Haftung für Links', im_links:'Unsere Website kann Links zu externen Websites Dritter enthalten, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte übernehmen wir daher keine Haftung. Für die Inhalte verlinkter Seiten ist stets der jeweilige Anbieter verantwortlich.',
      im_h_copyright:'Urheberrecht', im_copyright:'Die Inhalte und Werke auf dieser Website sind urheberrechtlich geschützt. Jede Vervielfältigung, Bearbeitung oder Verbreitung ausserhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung der studiomatt GmbH.',
      im_note:'Dieses Impressum ist eine Vorlage und sollte vor der Veröffentlichung von einer Fachperson geprüft und vervollständigt werden.',

      dp_r1:'Auskunft über die zu Ihrer Person bearbeiteten Daten zu erhalten', dp_r2:'unrichtige Daten berichtigen zu lassen', dp_r3:'die Löschung Ihrer Daten zu verlangen',
      dp_r4:'die Bearbeitung einzuschränken oder ihr zu widersprechen', dp_r5:'bei der zuständigen Aufsichtsbehörde Beschwerde einzureichen',

    }
  };
  Object.keys(I18N2).forEach(l=>Object.assign(I18N[l], I18N2[l]));

  /* ---------- real projects (order + content from studiomatt.ch) ---------- */
  const I18N3 = {
    en:{
      p1n:'Keep Building', p1c:'Extension · Zug · 2023',
      p2n:'Bossard Arena', p2c:'Extension · Zug · 2020–2022',
      p3n:'Eishalle Winterthur', p3c:'Feasibility study · Winterthur · 2021',
      p4n:'Cremia', p4c:'Interior · Lake Como · 2021',
      p5n:'Square One', p5c:'New build · Lucerne · 2019',
      p6n:'Am Mattenhof', p6c:'New build · Kriens · 2019',
      p7n:'Tägi', p7c:'Sports centre · Wettingen · 2019',
      d_title:'Keep Building',

    },
    it:{
      p1n:'Keep Building', p1c:'Ampliamento · Zugo · 2023',
      p2n:'Bossard Arena', p2c:'Ampliamento · Zugo · 2020–2022',
      p3n:'Eishalle Winterthur', p3c:'Studio di fattibilità · Winterthur · 2021',
      p4n:'Cremia', p4c:'Interni · Lago di Como · 2021',
      p5n:'Square One', p5c:'Nuova costruzione · Lucerna · 2019',
      p6n:'Am Mattenhof', p6c:'Nuova costruzione · Kriens · 2019',
      p7n:'Tägi', p7c:'Centro sportivo · Wettingen · 2019',
      d_title:'Keep Building',

    },
    de:{
      p1n:'Keep Building', p1c:'Erweiterung · Zug · 2023',
      p2n:'Bossard Arena', p2c:'Erweiterung · Zug · 2020–2022',
      p3n:'Eishalle Winterthur', p3c:'Machbarkeitsstudie · Winterthur · 2021',
      p4n:'Cremia', p4c:'Innenausbau · Comer See · 2021',
      p5n:'Square One', p5c:'Neubau · Luzern · 2019',
      p6n:'Am Mattenhof', p6c:'Neubau · Kriens · 2019',
      p7n:'Tägi', p7c:'Sportzentrum · Wettingen · 2019',
      d_title:'Keep Building',

    }
  };
  Object.keys(I18N3).forEach(l=>Object.assign(I18N[l], I18N3[l]));

  /* ---------- per-project content for the individual pages ---------- */
  const I18N4 = {
    en:{
      d_client:'Client',

      kb_n:'Keep Building', kb_c:'Extension · Zug · 2023',
      kb_lead:'Extension of the Bossard Arena and raising of the OYM training hall — keeping the stadium alive while it grows.',
      kb_loc:'Zug, CH', kb_client:'EVZ Sport AG', kb_scope:'Architect · preliminary to detailed design',
      kb_p1:'Together with general planner S+B Baumanagement AG, studiomatt develops the extension of the arena and the raising of the training hall, accompanying the project from the preliminary design to detailed planning while the venue stays in operation.',
      ba_n:'Bossard Arena', ba_c:'Extension · Zug · 2020–2022',
      ba_lead:'Concept, feasibility and preliminary design for the extension of the Bossard Arena.',
      ba_loc:'Zug, CH', ba_client:'EVZ / City of Zug', ba_scope:'General planner · concept to preliminary project',
      ba_p1:'As general planner, studiomatt studied the options for enlarging the arena — more seats, hospitality and public ice — establishing the feasibility and the guiding project that paved the way for the realisation.',
      ew_n:'Eishalle Winterthur', ew_c:'Feasibility study · Winterthur · 2021',
      ew_lead:'Condition analysis and feasibility study for the Winterthur ice stadium.',
      ew_loc:'Winterthur, CH', ew_client:'City of Winterthur', ew_scope:'Planning consortium with BBP Ingenieurbüro AG',
      ew_p1:'In a planning consortium with BBP Ingenieurbüro AG (Lieli), studiomatt assessed the condition of the existing stadium and the feasibility of its renewal, providing the city with a clear basis for the next steps.',
      cr_n:'Cremia', cr_c:'Interior · Lake Como · 2020',
      cr_lead:'Interior design of two holiday apartments on the shore of Lake Como.',
      cr_loc:'Cremia (CO), IT', cr_client:'Private', cr_scope:'Interior · concept to detailed design',
      cr_p1:'From concept to detailed design, studiomatt shaped the interiors of two holiday apartments on Lake Como — a calm, warm material palette framing the light and the water beyond.',
      sq_n:'Square One', sq_c:'New build · Lucerne · 2019',
      sq_lead:'Residential and commercial building “square one”, D4 Business Village.',
      sq_loc:'Lucerne region, CH', sq_client:'SUVA Lucerne', sq_scope:'With Scheitlin Syfrig · responsible partner · competition to tender',
      sq_p1:'As responsible partner at Scheitlin Syfrig Architekten, studiomatt led the project from competition through to tender planning for this mixed residential and commercial building.',
      mh_n:'Am Mattenhof', mh_c:'New build · Kriens · 2019',
      mh_lead:'Mixed-use development at the Mattenhof, Kriens.',
      mh_loc:'Kriens, CH', mh_client:'Mobimo AG', mh_scope:'With Scheitlin Syfrig · responsible partner · competition to completion',
      mh_p1:'As responsible partner at Scheitlin Syfrig Architekten, studiomatt accompanied this development from competition all the way to completion — the urban anchor that gives the studio its address today.',
      tg_n:'Tägi', tg_c:'Sports centre · Wettingen · 2019',
      tg_lead:'Sports and leisure centre Tägi, Wettingen.',
      tg_loc:'Wettingen, CH', tg_client:'Municipality of Wettingen', tg_scope:'With Scheitlin Syfrig · responsible partner · competition to detailed design',
      tg_p1:'As responsible partner at Scheitlin Syfrig Architekten, studiomatt developed the renewed sports and leisure centre from competition to detailed design planning.'
    },
    it:{
      d_client:'Committente',

      kb_n:'Keep Building', kb_c:'Ampliamento · Zugo · 2023',
      kb_lead:'Ampliamento della Bossard Arena e sopraelevazione della sala d\u2019allenamento OYM — mantenere vivo lo stadio mentre cresce.',
      kb_loc:'Zugo, CH', kb_client:'EVZ Sport AG', kb_scope:'Architetto · dal preliminare all\u2019esecutivo',
      kb_p1:'Insieme al general planner S+B Baumanagement AG, studiomatt sviluppa l\u2019ampliamento dell\u2019arena e la sopraelevazione della sala d\u2019allenamento, accompagnando il progetto dal preliminare alla progettazione esecutiva mentre l\u2019impianto resta in funzione.',
      ba_n:'Bossard Arena', ba_c:'Ampliamento · Zugo · 2020–2022',
      ba_lead:'Studio di concetto, fattibilità e progetto di massima per l\u2019ampliamento della Bossard Arena.',
      ba_loc:'Zugo, CH', ba_client:'EVZ / Città di Zugo', ba_scope:'General planner · dal concetto al progetto di massima',
      ba_p1:'Come general planner, studiomatt ha studiato le possibilità di ampliamento dell\u2019arena — più posti, ristorazione e ghiaccio pubblico — definendo la fattibilità e il progetto guida che ha aperto la strada alla realizzazione.',
      ew_n:'Eishalle Winterthur', ew_c:'Studio di fattibilità · Winterthur · 2021',
      ew_lead:'Analisi dello stato e studio di fattibilità per lo stadio del ghiaccio di Winterthur.',
      ew_loc:'Winterthur, CH', ew_client:'Città di Winterthur', ew_scope:'Comunità di progettazione con BBP Ingenieurbüro AG',
      ew_p1:'In comunità di progettazione con BBP Ingenieurbüro AG (Lieli), studiomatt ha valutato lo stato dello stadio esistente e la fattibilità del suo rinnovo, fornendo alla città una base chiara per i passi successivi.',
      cr_n:'Cremia', cr_c:'Interni · Lago di Como · 2020',
      cr_lead:'Interni di due appartamenti di vacanza sulla riva del Lago di Como.',
      cr_loc:'Cremia (CO), IT', cr_client:'Privato', cr_scope:'Interni · dal concetto all\u2019esecutivo',
      cr_p1:'Dal concetto alla progettazione esecutiva, studiomatt ha disegnato gli interni di due appartamenti di vacanza sul Lago di Como — una palette materica calma e calda che incornicia la luce e l\u2019acqua.',
      sq_n:'Square One', sq_c:'Nuova costruzione · Lucerna · 2019',
      sq_lead:'Edificio residenziale e commerciale “square one”, D4 Business Village.',
      sq_loc:'Regione di Lucerna, CH', sq_client:'SUVA Lucerna', sq_scope:'Con Scheitlin Syfrig · partner responsabile · dal concorso alla messa in appalto',
      sq_p1:'Come partner responsabile presso Scheitlin Syfrig Architekten, studiomatt ha guidato il progetto dal concorso fino alla pianificazione d\u2019appalto per questo edificio misto residenziale e commerciale.',
      mh_n:'Am Mattenhof', mh_c:'Nuova costruzione · Kriens · 2019',
      mh_lead:'Intervento a destinazione mista al Mattenhof, Kriens.',
      mh_loc:'Kriens, CH', mh_client:'Mobimo AG', mh_scope:'Con Scheitlin Syfrig · partner responsabile · dal concorso al completamento',
      mh_p1:'Come partner responsabile presso Scheitlin Syfrig Architekten, studiomatt ha accompagnato l\u2019intervento dal concorso fino al completamento — l\u2019ancora urbana che oggi dà allo studio il suo indirizzo.',
      tg_n:'Tägi', tg_c:'Centro sportivo · Wettingen · 2019',
      tg_lead:'Centro sportivo e per il tempo libero Tägi, Wettingen.',
      tg_loc:'Wettingen, CH', tg_client:'Comune di Wettingen', tg_scope:'Con Scheitlin Syfrig · partner responsabile · dal concorso all\u2019esecutivo',
      tg_p1:'Come partner responsabile presso Scheitlin Syfrig Architekten, studiomatt ha sviluppato il rinnovato centro sportivo dal concorso alla progettazione esecutiva.'
    },
    de:{
      d_client:'Bauherrschaft',

      kb_n:'Keep Building', kb_c:'Erweiterung · Zug · 2023',
      kb_lead:'Erweiterung der Bossard Arena und Aufstockung der OYM-Trainingshalle — das Stadion am Leben halten, während es wächst.',
      kb_loc:'Zug, CH', kb_client:'EVZ Sport AG', kb_scope:'Architekt · Vorprojekt bis Ausführungsplanung',
      kb_p1:'Gemeinsam mit der Generalplanerin S+B Baumanagement AG entwickelt studiomatt die Erweiterung der Arena und die Aufstockung der Trainingshalle und begleitet das Projekt vom Vorprojekt bis zur Ausführungsplanung, während der Betrieb weiterläuft.',
      ba_n:'Bossard Arena', ba_c:'Erweiterung · Zug · 2020–2022',
      ba_lead:'Konzeptstudie, Machbarkeit und Richtprojekt für die Erweiterung der Bossard Arena.',
      ba_loc:'Zug, CH', ba_client:'EVZ / Stadt Zug', ba_scope:'Generalplaner · Konzept bis Richtprojekt',
      ba_p1:'Als Generalplaner untersuchte studiomatt die Möglichkeiten zur Erweiterung der Arena — mehr Sitzplätze, Gastronomie und öffentliches Eis — und legte Machbarkeit und Richtprojekt fest, die den Weg zur Realisierung ebneten.',
      ew_n:'Eishalle Winterthur', ew_c:'Machbarkeitsstudie · Winterthur · 2021',
      ew_lead:'Zustandsanalyse und Machbarkeitsstudie für das Eisstadion Winterthur.',
      ew_loc:'Winterthur, CH', ew_client:'Stadt Winterthur', ew_scope:'Planergemeinschaft mit BBP Ingenieurbüro AG',
      ew_p1:'In einer Planergemeinschaft mit der BBP Ingenieurbüro AG (Lieli) beurteilte studiomatt den Zustand des bestehenden Stadions und die Machbarkeit seiner Erneuerung und schuf der Stadt eine klare Entscheidungsgrundlage.',
      cr_n:'Cremia', cr_c:'Innenausbau · Comer See · 2020',
      cr_lead:'Innenausbau zweier Ferienwohnungen am Ufer des Comer Sees.',
      cr_loc:'Cremia (CO), IT', cr_client:'Privat', cr_scope:'Innenausbau · Konzept bis Ausführung',
      cr_p1:'Von der Konzeption bis zur Ausführungsplanung gestaltete studiomatt die Innenräume zweier Ferienwohnungen am Comer See — eine ruhige, warme Materialpalette, die Licht und Wasser einfasst.',
      sq_n:'Square One', sq_c:'Neubau · Luzern · 2019',
      sq_lead:'Wohn- und Geschäftshaus „square one“, D4 Business Village.',
      sq_loc:'Region Luzern, CH', sq_client:'SUVA Luzern', sq_scope:'Bei Scheitlin Syfrig · verantwortlicher Partner · Wettbewerb bis Ausschreibung',
      sq_p1:'Als verantwortlicher Partner bei Scheitlin Syfrig Architekten leitete studiomatt das Projekt vom Wettbewerb bis zur Ausschreibungsplanung dieses gemischten Wohn- und Geschäftshauses.',
      mh_n:'Am Mattenhof', mh_c:'Neubau · Kriens · 2019',
      mh_lead:'Nutzungsgemischte Überbauung am Mattenhof, Kriens.',
      mh_loc:'Kriens, CH', mh_client:'Mobimo AG', mh_scope:'Bei Scheitlin Syfrig · verantwortlicher Partner · Wettbewerb bis Bauvollendung',
      mh_p1:'Als verantwortlicher Partner bei Scheitlin Syfrig Architekten begleitete studiomatt die Überbauung vom Wettbewerb bis zur Bauvollendung — der urbane Anker, der dem Atelier heute seine Adresse gibt.',
      tg_n:'Tägi', tg_c:'Sportzentrum · Wettingen · 2019',
      tg_lead:'Sport- und Erholungszentrum Tägi, Wettingen.',
      tg_loc:'Wettingen, CH', tg_client:'Gemeinde Wettingen', tg_scope:'Bei Scheitlin Syfrig · verantwortlicher Partner · Wettbewerb bis Ausführung',
      tg_p1:'Als verantwortlicher Partner bei Scheitlin Syfrig Architekten entwickelte studiomatt das erneuerte Sport- und Erholungszentrum vom Wettbewerb bis zur Ausführungsplanung.'
    }
  };
  Object.keys(I18N4).forEach(l=>Object.assign(I18N[l], I18N4[l]));
  Object.assign(I18N.en,{skip:'Skip to content'});
  Object.assign(I18N.it,{skip:'Vai al contenuto'});
  Object.assign(I18N.de,{skip:'Zum Inhalt springen'});

  /* ---- Impressum: testo reale dello studio (DE verbatim, IT/EN fedeli) ---- */
  Object.assign(I18N.de,{
    im_h_company:'Redaktion und Bilder',
    im_h_contact:'Kontakt',
    im_h_disclaimer:'Haftungsausschluss',
    im_disclaimer:'Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.<br><br>Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.<br><br>Der Autor behält es sich ausdrücklich vor, Teile der Seiten ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.',
    im_h_links:'Haftung für Links',
    im_links:'Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin.',
    im_h_copyright:'Urheberrechte',
    im_copyright:'Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website gehören ausschliesslich studiomatt GmbH oder den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.'
  });
  Object.assign(I18N.it,{
    im_h_company:'Redazione e immagini',
    im_h_contact:'Contatto',
    im_h_disclaimer:'Esclusione di responsabilità',
    im_disclaimer:'L\u2019autore non fornisce alcuna garanzia in merito alla correttezza dei contenuti, all\u2019accuratezza, all\u2019attualità, all\u2019affidabilità e alla completezza delle informazioni.<br><br>Sono escluse le pretese di responsabilità nei confronti dell\u2019autore per danni di natura materiale o immateriale derivanti dall\u2019accesso o dall\u2019uso ovvero dal mancato uso delle informazioni pubblicate, dall\u2019abuso della connessione o da guasti tecnici.<br><br>L\u2019autore si riserva espressamente il diritto di modificare, integrare o cancellare parti delle pagine senza preavviso, oppure di sospenderne temporaneamente o definitivamente la pubblicazione.',
    im_h_links:'Responsabilità per i link',
    im_links:'I rimandi e i link a siti web di terzi sono al di fuori del nostro ambito di responsabilità. Si declina ogni responsabilità per tali siti web. L\u2019accesso e l\u2019uso di tali siti avvengono a rischio dell\u2019utente.',
    im_h_copyright:'Diritti d\u2019autore',
    im_copyright:'I diritti d\u2019autore e tutti gli altri diritti sui contenuti, immagini, foto o altri file presenti sul sito appartengono esclusivamente a studiomatt GmbH o ai titolari dei diritti espressamente indicati. Per la riproduzione di qualsiasi elemento occorre ottenere in anticipo il consenso scritto dei titolari dei diritti d\u2019autore.'
  });
  Object.assign(I18N.en,{
    im_h_company:'Editorial & images',
    im_h_contact:'Contact',
    im_h_disclaimer:'Disclaimer',
    im_disclaimer:'The author assumes no liability whatsoever for the correctness, accuracy, timeliness, reliability and completeness of the information.<br><br>Liability claims against the author for damages of a material or immaterial nature arising from access to or use, or non-use, of the published information, from misuse of the connection or from technical faults are excluded.<br><br>The author expressly reserves the right to change, supplement or delete parts of the pages without separate announcement, or to suspend publication temporarily or permanently.',
    im_h_links:'Liability for links',
    im_links:'References and links to third-party websites lie outside our area of responsibility. Any responsibility for such websites is declined. Access to and use of such websites is at the user\u2019s own risk.',
    im_h_copyright:'Copyright',
    im_copyright:'The copyright and all other rights to content, images, photos or other files on the website belong exclusively to studiomatt GmbH or to the specifically named rights holders. The prior written consent of the copyright holders must be obtained for the reproduction of any elements.'
  });

  /* Sito solo in tedesco: la lingua è forzata a DE.
     I dizionari IT/EN restano nel file (non usati) per un eventuale ripristino futuro. */
  function getLang(){ return 'de'; }
  function saveLang(l){
    /* Il sito e' solo in tedesco: non c'e' nessuna scelta da ricordare.
       Prima qui si scriveva 'smt_lang' nella memoria del browser. Non e' un
       cookie, ma era l'unica cosa che il sito lasciava sul computer di chi
       visita, e non serviva a niente. Ora non lascia piu' nulla, cosi' il
       punto 8 della Datenschutzerklaerung e' vero alla lettera. */
    window.__smtLang = l;
  }
  function applyLang(lang){
    const d = I18N[lang] || I18N.en;
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const v = d[el.dataset.i18n];
      if(v!=null) el.innerHTML = v;
    });
    document.documentElement.lang = lang;
    document.querySelectorAll('.ov-lang b').forEach(b=>b.classList.toggle('active', b.dataset.lang===lang));
    saveLang(lang);
  }

  /* ---------- icons ---------- */
  const ig = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none"/></svg>`;
  const li = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4 0 4.38 2.5 4.38 5.74V21h-4v-5c0-1.2 0-2.74-1.9-2.74s-2.1 1.3-2.1 2.65V21H9z"/></svg>`;
  const pi = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 4 5.7 4 9c0 2 .8 4.2 2.6 5 .3.1.4 0 .5-.3l.2-.9c.1-.3 0-.4-.2-.6-.5-.6-.8-1.4-.8-2.5 0-3.2 2.4-6.1 6.3-6.1 3.4 0 5.3 2.1 5.3 4.9 0 3.7-1.6 6.8-4 6.8-1.3 0-2.3-1.1-2-2.4.4-1.6 1.1-3.3 1.1-4.5 0-1-.6-1.9-1.7-1.9-1.4 0-2.5 1.4-2.5 3.3 0 1.2.4 2 .4 2l-1.6 6.8c-.5 2-.1 4.5-.04 4.7 0 .1.2.2.3.1.1-.2 1.9-2.3 2.5-4.5l1-3.7c.5.9 1.8 1.7 3.2 1.7 4.3 0 7.2-3.9 7.2-9.1C20.5 5.5 17.1 2 12 2z"/></svg>`;

  /* Indirizzi senza il suffisso .html: il server serve comunque la pagina
     e quello che si legge nella barra del browser resta pulito. */
  const links = [
    {href:'projects', key:'m_projects', page:'projects'},
    {href:'about',    key:'m_studio',   page:'about'},
    {href:'team',     key:'m_team',     page:'team'},
    {href:'contact',  key:'m_contact',  page:'contact'}
  ];
  const menuLinks = links.map((l,i)=>
    `<a href="${l.href}" class="${l.page===page?'active':''}"${l.page===page?' aria-current="page"':''}><span class="idx">0${i+1}</span><span data-i18n="${l.key}">${l.key}</span></a>`
  ).join('');

  const headerHTML = `
  <header id="header">
    <div class="wrap nav">
      <a href="/" class="logo">${logoSVG('')}</a>
      <button class="burger" id="burger" aria-label="Open menu"><span></span><span></span></button>
    </div>
  </header>
  <div class="overlay" id="overlay">
    <div class="ov-img"><img src="img/menu-1280.webp" srcset="img/menu-768.webp 768w, img/menu-1280.webp 1280w, img/menu-1920.webp 1920w" sizes="(max-width:980px) 0px, 45vw" alt="" onerror="this.parentNode.style.background='#e8e8e8'"></div>
    <div class="ov-panel">
      <a class="ov-logo" href="/" aria-label="studiomatt">${logoSVG('')}</a>
      <button class="ov-close" id="ovClose" aria-label="Close menu">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg>
      </button>
      <nav class="ov-menu">${menuLinks}</nav>
      <!-- Selettore lingua rimosso: sito solo DE -->
      <div class="ov-foot">
        <!-- social temporaneamente nascoste — rimuovi questi due marcatori di commento per riattivarle
        <div class="ov-social">
          <a href="#" aria-label="Instagram">${ig}</a>
          <a href="#" aria-label="LinkedIn">${li}</a>
          <a href="#" aria-label="Pinterest">${pi}</a>
        </div>
        -->
        <div class="ov-legal"><a href="impressum" data-i18n="leg_impressum">Impressum</a><a href="datenschutz" data-i18n="leg_privacy">Privacy</a></div>
      </div>
    </div>
  </div>`;

  const footerHTML = `
  <footer>
    <div class="wrap foot">
      <span data-i18n="foot_rights">© 2026 studiomatt gmbh</span>
      <span><a href="impressum" data-i18n="leg_impressum">Impressum</a> · <a href="datenschutz" data-i18n="leg_privacy">Privacy</a></span>
    </div>
  </footer>`;

  document.body.insertAdjacentHTML('afterbegin', headerHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  /* ---- accessibility: skip link + main landmark ---- */
  const firstSection = document.querySelector('body > section');
  if(firstSection && !document.getElementById('main')) firstSection.id = 'main';
  document.body.insertAdjacentHTML('afterbegin','<a class="skip-link" href="#main" data-i18n="skip">Skip to content</a>');

  /* ---- apply language now that menu/footer exist ---- */
  applyLang(getLang());
  document.querySelectorAll('.ov-lang b').forEach(b=>{
    b.addEventListener('click', ()=>applyLang(b.dataset.lang));
  });

  /* ---- overlay menu open/close ---- */
  const overlay = document.getElementById('overlay');
  const burger  = document.getElementById('burger');
  const closeBtn= document.getElementById('ovClose');
  const open  = ()=>{overlay.classList.add('open');document.body.classList.add('lock')};
  const shut  = ()=>{overlay.classList.remove('open');document.body.classList.remove('lock')};
  burger.addEventListener('click', open);
  closeBtn.addEventListener('click', shut);
  document.addEventListener('keydown', e=>{ if(e.key==='Escape') shut(); });

  /* ---- header scroll state ---- */
  const header = document.getElementById('header');
  const solidHeader = document.body.dataset.solidheader != null;
  const onScroll = ()=>header.classList.toggle('scrolled', solidHeader || window.scrollY>60);
  window.addEventListener('scroll', onScroll); onScroll();

  /* ---- page transition curtain ---- */
  const curtain = document.querySelector('.curtain');
  /* Avvia la tendina d'ingresso e, soprattutto, garantisce che si tolga.
     La tendina copre tutta la pagina: finche' non si solleva si vede solo
     nero. Partiva al secondo fotogramma utile, ma se la scheda e' in secondo
     piano, o il telefono e' in risparmio energetico, quei fotogrammi non
     arrivano e la pagina resta nera. Ora c'e' anche una partenza a tempo e
     una rete di sicurezza che la fa sparire comunque. */
  function alzaTendina(){
    if(!curtain) return;
    curtain.classList.add('cstart');
    setTimeout(()=>{
      if(curtain.classList.contains('leaving')) return;  // sta cambiando pagina
      curtain.style.display = 'none';
    }, 3000);
  }
  if(curtain){
    curtain.innerHTML = logoSVG('clogo');
    requestAnimationFrame(()=>requestAnimationFrame(alzaTendina));
    setTimeout(alzaTendina, 500);
  }
  function isInternal(a){
    const href = a.getAttribute('href') || '';
    if(!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return false;
    if(a.target === '_blank') return false;
    if(/^https?:\/\//i.test(href)) return false;        // esterno
    /* Gli indirizzi del sito non hanno piu' il suffisso .html. Qui si
       riconosce una pagina interna da quello che resta dopo l'ultima barra:
       se non contiene un punto e' una pagina, se lo contiene e' un file
       (una pianta, un PDF) e va lasciato aprire normalmente. */
    const path = href.split('?')[0].split('#')[0];
    if(path === '' || path === '/') return true;        // la home
    const ultimo = path.split('/').pop();
    if(/\.html$/i.test(ultimo)) return true;            // vecchi indirizzi, per sicurezza
    return !ultimo.includes('.');
  }
  if(curtain){
    document.querySelectorAll('a[href]').forEach(a=>{
      if(!isInternal(a)) return;
      a.addEventListener('click', e=>{
        if(e.metaKey||e.ctrlKey||e.shiftKey) return;     // let new-tab work
        e.preventDefault();
        const url = a.getAttribute('href');
        shut();
        curtain.classList.add('leaving');
        setTimeout(()=>{ window.location.href = url; }, 600);
      });
    });
    // restore on back/forward cache
    window.addEventListener('pageshow', e=>{
      if(e.persisted){
        curtain.style.display = '';
        curtain.classList.remove('leaving','cstart');
        void curtain.offsetWidth;
        requestAnimationFrame(()=>requestAnimationFrame(alzaTendina));
        setTimeout(alzaTendina, 500);
      }
    });
  }

  /* ---- scroll reveal ---- */
  /* La comparsa in dissolvenza si attiva quando l'elemento entra nello schermo.
     Prima la soglia era il 14% dell'ALTEZZA DELL'ELEMENTO: su una griglia lunga
     come quella di Work in Progress, che su telefono diventa una colonna sola
     alta seimila pixel, servivano ottocentoquaranta pixel visibili tutti insieme
     mentre lo schermo ne ha ottocentododici. Non succedeva mai e la galleria
     restava invisibile: si vedeva solo la fotografia di copertina.
     Adesso basta che il bordo alto superi l'88% dello schermo, qualunque sia
     l'altezza dell'elemento. */
  const io = new IntersectionObserver(es=>{
    es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  },{threshold:0, rootMargin:'0px 0px -12% 0px'});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  /* ---- before / after sliders ---- */
  document.querySelectorAll('.ba').forEach(s=>{
    const setp=cx=>{const r=s.getBoundingClientRect();let p=(cx-r.left)/r.width;p=Math.max(0,Math.min(1,p));s.style.setProperty('--p',(p*100)+'%');};
    let drag=false;
    s.addEventListener('pointerdown',e=>{drag=true;setp(e.clientX);});
    window.addEventListener('pointermove',e=>{if(drag)setp(e.clientX);});
    window.addEventListener('pointerup',()=>drag=false);
    s.style.setProperty('--p','50%');
  });

  /* ---- home hero rotation ---- */
  const qs = document.querySelectorAll('#heroQ span');
  const slides = document.querySelectorAll('.hero-slide');
  if(qs.length){ let qi=0; setInterval(()=>{ qs[qi].classList.remove('active'); qi=(qi+1)%qs.length; qs[qi].classList.add('active'); },4200); }
  if(slides.length){ let si=0; setInterval(()=>{ slides[si].classList.remove('active'); si=(si+1)%slides.length; slides[si].classList.add('active'); },5600); }

  /* Nessun messaggio sui cookie: il sito non ne deposita nessuno.
   Scelta del cliente del 19 ottobre: via la mappa interattiva di Google
   dalla pagina Kontakt, che era l'unico servizio esterno. Restano la mappa
   disegnata con i segnaposti e il collegamento che apre Google Maps a parte.
   Cosi' il punto 8 della Datenschutzerklaerung e' vero senza eccezioni. */

  /* ---------- galleria a schermo intero (lightbox) ----------
     Si attiva solo sulle pagine con data-lightbox sul <body>.
     Per estenderla a un altro progetto basta aggiungere quell'attributo.
     Il confronto prima/dopo e' escluso: li' il click serve a trascinare il cursore. */
  if(document.body.dataset.lightbox != null){
    const imgs = Array.prototype.slice
      .call(document.querySelectorAll('.pgrid img, .pwide img, .gallery img, .oym-portrait img'))
      .filter(function(im){ return !im.closest('.ba-slider'); });

    if(imgs.length){
      /* dallo srcset prende il file piu' grande: in pieno schermo serve la risoluzione alta */
      const biggest = function(im){
        const ss = im.getAttribute('srcset');
        if(!ss) return im.currentSrc || im.src;
        let best = im.src, bw = 0;
        ss.split(',').forEach(function(part){
          const bits = part.trim().split(/\s+/);
          const w = bits[1] && bits[1].slice(-1) === 'w' ? parseInt(bits[1], 10) : 0;
          if(w >= bw){ bw = w; best = bits[0]; }
        });
        return best;
      };

      const ico = function(d){ return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">' + d + '</svg>'; };
      const lb = document.createElement('div');
      lb.className = 'lightbox';
      lb.setAttribute('role', 'dialog');
      lb.setAttribute('aria-modal', 'true');
      lb.setAttribute('aria-label', 'Bildergalerie');
      lb.innerHTML =
        '<button class="lb-btn lb-close" aria-label="Schliessen">' + ico('<line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/>') + '</button>' +
        '<button class="lb-btn lb-prev" aria-label="Vorheriges Bild">' + ico('<polyline points="15 5 8 12 15 19"/>') + '</button>' +
        '<button class="lb-btn lb-next" aria-label="Naechstes Bild">' + ico('<polyline points="9 5 16 12 9 19"/>') + '</button>' +
        '<figure class="lb-fig"><img alt=""></figure>' +
        '<div class="lb-count"></div>';
      document.body.appendChild(lb);

      const pic = lb.querySelector('.lb-fig img');
      const cnt = lb.querySelector('.lb-count');
      const btnClose = lb.querySelector('.lb-close');
      let idx = 0, lastFocus = null;

      const show = function(n){
        idx = (n + imgs.length) % imgs.length;
        const src = biggest(imgs[idx]);
        pic.style.opacity = '0';
        const pre = new Image();
        pre.onload = function(){ pic.src = src; pic.style.opacity = '1'; };
        pre.onerror = function(){ pic.src = src; pic.style.opacity = '1'; };
        pre.src = src;
        cnt.textContent = (idx + 1) + ' / ' + imgs.length;
      };
      const open = function(n){
        lastFocus = document.activeElement;
        show(n);
        lb.classList.add('open');
        document.body.classList.add('lock');
        btnClose.focus();
      };
      const close = function(){
        lb.classList.remove('open');
        document.body.classList.remove('lock');
        if(lastFocus && lastFocus.focus) lastFocus.focus();
      };

      imgs.forEach(function(im, n){
        im.style.cursor = 'zoom-in';
        im.addEventListener('click', function(){ open(n); });
      });
      btnClose.addEventListener('click', close);
      lb.querySelector('.lb-prev').addEventListener('click', function(e){ e.stopPropagation(); show(idx - 1); });
      lb.querySelector('.lb-next').addEventListener('click', function(e){ e.stopPropagation(); show(idx + 1); });
      lb.addEventListener('click', function(e){
        if(e.target === lb || e.target.classList.contains('lb-fig')) close();
      });
      document.addEventListener('keydown', function(e){
        if(!lb.classList.contains('open')) return;
        if(e.key === 'Escape') close();
        else if(e.key === 'ArrowLeft') show(idx - 1);
        else if(e.key === 'ArrowRight') show(idx + 1);
      });
      let tx = null;
      lb.addEventListener('touchstart', function(e){ tx = e.touches[0].clientX; }, {passive:true});
      lb.addEventListener('touchend', function(e){
        if(tx === null) return;
        const dx = e.changedTouches[0].clientX - tx; tx = null;
        if(Math.abs(dx) > 50) show(dx < 0 ? idx + 1 : idx - 1);
      }, {passive:true});
    }
  }

  /* ---------- video di progetto ----------
     A fine riproduzione si torna al fotogramma di copertina invece di restare
     sul nero, e il tasto per far ripartire il video e' subito li'. */
  Array.prototype.slice.call(document.querySelectorAll('.pvideo video')).forEach(function(v){
    v.addEventListener('ended', function(){ v.load(); });
  });

})();
