export default (obj, cb) => {
  cb(obj.valorBaixar, 'valorBaixar');
  cb(obj.valorJuros, 'valorJuros');
  cb(obj.valorMulta, 'valorMulta');
  cb(obj.valorCorrecao, 'valorCorrecao');
  cb(obj.valorEncargos, 'valorEncargos');
  cb(obj.valorOutrosAcrescimos, 'valorOutrosAcrescimos');
  cb(obj.valorDescontos, 'valorDescontos');
  cb(obj.valorOutrosDescontos, 'valorOutrosDescontos');
}
