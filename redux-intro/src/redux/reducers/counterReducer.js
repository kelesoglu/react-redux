import * as actionTypes from "../actions/actionTypes";

const counterReducer = (state = 0, action) => {
  let newState;

  switch (action.type) {
    case actionTypes.INCREASE_COUNTER:
      return (newState = state + action.payload);
    case actionTypes.DECREASE_COUNTER:
      return (newState = state - action.payload);
    case actionTypes.INCREASE_BY_TWO_COUNTER:
      return (newState = state + action.payload);
    default:
      return state;
  }
};

export default counterReducer;

/*
reducer: aksiyona göre state belirlemek reducer içerisinde veritabanına ve apiye bağlanılmaz. Basit state yönetimi işleri yapılır.
Javascript Immutuablity
reducer: State ve action'ı parametre alan ve yeni state'i dönen pure bir fonksiyondur. Action'ın type'na göre state'i değiştirir ve 
yeni state'i geri döner. Mutlaka state'in güncel bir kopyası geri dönmesi gerekiyor.Aksi halde componentler kendilerini render etmez.
Bunu yapmaktaki amaç state'in referansını değiştirmektir. Bunun için Object.assign() veya Object spread operator yöntemlerini kullanırız.
Propgram başında state değerinin undefined olmaması için başlangıç değerini vermeliyyiz.
reducer amacı state bilgisini döndürmektir.

*/
