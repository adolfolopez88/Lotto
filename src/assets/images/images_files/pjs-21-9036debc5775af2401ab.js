webpackJsonp([21],{"0fKD":function(e,r,o){"use strict";function t(e){var r=e.scope,o=e.typo,t=e.i18n,i=o.corrected,a=o.correction,s=o.original,d=i?"/search/"+r+"/?q="+encodeURIComponent(s)+"&rs=typo_auto_original&auto_correction_disabled=true":"/search/"+r+"/?q="+encodeURIComponent(a)+"&rs=typo_suggestion&auto_correction_disabled=true";return n.a.createElement(m.F,{smSize:"xs",mdSize:"sm",lgSize:"md"},i?Object(l.b)(t._("Here's what we found for {{ correctionLink }}. Search {{ originalLink }} instead?","Misspelled search query has been auto-corrected. Offer to search for the original query."),{correctionLink:n.a.createElement(m.F,{inline:!0,smSize:"xs",mdSize:"sm",lgSize:"md"},a),originalLink:n.a.createElement(c.b,{className:"searchAutocorrectLink",key:"originalLink",to:d},n.a.createElement(m.F,{bold:!0,inline:!0,smSize:"xs",mdSize:"sm",lgSize:"md"},s))}):Object(l.b)(t._("Did you mean {{ correctionLink }}?","Search term seems to be misspelled. Offer to search for the correct spelling."),{correctionLink:n.a.createElement(c.b,{className:"searchAutocorrectLink",key:"correctionLink",to:d},a)}))}Object.defineProperty(r,"__esModule",{value:!0});var i=o("OVW8"),n=o.n(i),c=o("tmfO"),a=o("IaRT"),s=o.n(a),l=o("suNN"),m=o("gEaE"),d=o("AYde");r.default=Object(d.b)(t)}});