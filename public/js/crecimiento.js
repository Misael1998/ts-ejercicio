const crecimiento = (
  poblacionInicial,
  anios,
  tasaMortalidad,
  tasaNatalidad,
  migracion,
  inmigracion
) => {
  let prediccionPoblacional = [];
  let poblacionAcumulada = 0;
  for (let i = 0; i <= anios; i++) {
    if (i == 0) {
      prediccionPoblacional.push({
        poblacion: poblacionInicial,
        nacidos: 0,
        muertos: 0,
        migrantes: 0,
        inmigrantes: 0,
      });
      poblacionAcumulada = poblacionInicial;
    } else {
      const nacidos = Math.ceil(poblacionAcumulada * tasaNatalidad);
      const muertos = Math.ceil(poblacionAcumulada * tasaMortalidad);
      const inmigrantes = Math.ceil(poblacionAcumulada * inmigracion);
      const migrantes = Math.ceil(poblacionAcumulada * migracion);
      poblacionAcumulada += (nacidos - muertos) + (inmigrantes - migrantes);

      prediccionPoblacional.push({
        poblacion: poblacionAcumulada,
        nacidos,
        muertos,
        migrantes,
        inmigrantes,
      });
    }
  }
  return prediccionPoblacional;
};
