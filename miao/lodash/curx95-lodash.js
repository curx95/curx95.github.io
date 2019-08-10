var curx95 = {
  /**
   * Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
   * @param {Array} array The array to process.
   * @param {Number} size The length of each chunk
   * @returns {Array} result Returns the new array of chunks.
   */
  chunk:(arry, size = 1) =>{
    var result = []
    for (var i = 0; i < arry.length; i += size) {
      result.push(arry.slice(i, i + size))
    }
    return result
  },
  /**
   *Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
   * @param {Array} array The array to compact.
   * @returns {Array} array Returns the new array of filtered values.
   */
  compact:(array)=>{
    return array.filter(e => e)
  },
  /**
   *
   * @param array The array to difference
   * @param value The values to exclude.
   * @returns {Array} Returns the new array of filtered values.
   */
  difference:(arry, ...value) => arry.filter(x => ![].concat(...value).includes(x)),
  //去除目标数组中非数组的元素，并对比其余元素，留下非重复值  differenceBy:(arry,...value)=>arry.filter(x=
  //>![].concat(...value.filter(e=>typeof(e)===Object)).includes(x))

  drop:(array,n = 1) => array.slice(n),

  dropRight:(array,n = 1)=>(array.length - n)>0?array.slice(0,array.length-n):[],

  identity:(value)=>value,

  fill:(array,value,start = 0,end = array.length)=>{
    if(start < 0){
    start = -start>array.length?0:start+array.length
    }
    end = (end === undefined||end>array.length)?array.length:end
    if(end<0){
      end+=array.length
    }
    if(start > end){
      end = 0
    }
    while(start<end){
      array[start++] = value
    }
    return array
  },
  flatten:(array)=>[].concat(...array),

  unary:(f)=>value=>f(value)

};