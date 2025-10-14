// Embed the three specs
vegaEmbed("#choropleth", "visualizations/visualization1.json").catch(console.error);
vegaEmbed("#bar",        "visualizations/visualization3.json").catch(console.error);
vegaEmbed("#hotspots",   "visualizations/visualization2.json").catch(console.error);
