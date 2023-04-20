let dictionaryEnglish = ['family', 'mother', 'father', 'daughter', 'son', 'sister', 'brother', 'grandmother', 'granfather'];
let dictionaryViet = ['gia đình', 'mẹ', 'bố', 'con gái', 'con trai', 'chị em gái', 'anh em trai', 'bà nội/ngoại', 'ông nội/ngoại'];
let text = 'son';
let a = 0;
for (let i = 0; i < dictionaryEnglish.length; i++) {
    if (text === dictionaryEnglish[i]) {
        console.log(dictionaryViet[i]);
        break;
    }
    a += 1;
}
if (a == dictionaryEnglish.length) {
    console.log("không tìm thấy từ này");
}
