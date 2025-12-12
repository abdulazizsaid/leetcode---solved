function createPairs(arr) {
  let pairs = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      pairs.push([arr[i], arr[j]]);
    }
  }

  return pairs, arr;
}

let a = createPairs([1, 2, 3, 4, 5, 56, 6, 7])
console.log(a);


class أشهر {
  constructor() {
    this.أشهر = [
      'محرم', 'صفر', 'ربيع الاول',
      'ربيع الثاني', 'جمادى الاول', 'جمادى الثاني',
      'رجب', 'شعبان', 'رمضان',
      'شوال', 'ذي القعد', 'ذي الحج'
    ]

    الأفضل(); {
      let كبير;
      for (const شهر of this.أشهر) {
        if (شهر === 'رمضان') {
          كبير = شهر;
          break;
        }
      }
    }
  }
}
