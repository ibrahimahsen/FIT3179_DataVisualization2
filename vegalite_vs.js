// Simple version — uses each spec's own Vega-Lite configuration

document.addEventListener('DOMContentLoaded', async () => {
  const charts = [
    { el: '#v1', spec: 'visualizations/visualization1.vl.json' },
    { el: '#v2', spec: 'visualizations/visualization2.vl.json' },
    { el: '#v3', spec: 'visualizations/visualization3.vl.json' },
    { el: '#v4', spec: 'visualizations/visualization4.vl.json' },
    { el: '#v5', spec: 'visualizations/visualization5.vl.json' },
  ];

for (const { el, spec } of charts) {
    try {
        await vegaEmbed(el, spec, {
            actions: false,  
            renderer: 'canvas' 
        });
    } catch (err) {
        console.error(`Error embedding ${spec}:`, err);
    }
    }
});
