// Embed the three specs
vegaEmbed("#choropleth", "visualizations/visualization1.vl.json").catch(console.error);
vegaEmbed("#bar",        "visualizations/visualization3.vl.json").catch(console.error);
vegaEmbed("#hotspots",   "visualizations/visualization2.vl.json").catch(console.error);
vegaEmbed("#line", "visualizations/visualization4.vl.json").catch(console.error);
