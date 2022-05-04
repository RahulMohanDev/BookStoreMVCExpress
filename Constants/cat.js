// this is just an example
const TYPE1 = "cat_type_1";
const TYPE2 = "cat_type_2";
const TYPE3 = "cat_type_3";

const CAT_TYPES = Object.freeze({ TYPE1, TYPE2, TYPE3 });


// avoid magic number or words

if("from user"===CAT_TYPES.TYPE3){

}

if("from user"==="cat_typ_1"){

}
