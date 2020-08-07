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
      prediccionPoblacional.push(poblacionInicial);
      poblacionAcumulada = poblacionInicial;
    } else {
      poblacionAcumulada +=
        poblacionAcumulada * tasaNatalidad -
        poblacionAcumulada * tasaMortalidad +
        poblacionAcumulada * inmigracion -
        poblacionAcumulada * migracion;

      prediccionPoblacional.push(Math.ceil(poblacionAcumulada));
    }
  }
  return prediccionPoblacional;
};
