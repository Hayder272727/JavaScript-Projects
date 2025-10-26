// This function demonstrates a JavaScript "dictionary" using an object.
// It deletes a key BEFORE trying to display its value, per the assignment requirements.
function my_Dictionary() {
    // 1) Create a dictionary (object) with key-value pairs (KVPs)
    //    لاحظ أن هذا أشبه بقاموس: مفاتيح (Keys) وقيم (Values)
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark"
    };

    // 2) Delete a key BEFORE displaying its value
    //    حسب متطلبات الواجب: احذف المفتاح قبل عرضه
    delete Animal.Sound;

    // 3) Output: We'll try to show the deleted key's value inside the HTML element
    //    بما أن المفتاح Sound تم حذفه، فستكون قيمته الآن undefined عند العرض
    document.getElementById("Dictionary").innerHTML =
        "The sound of the animal is: " + Animal.Sound;

    // ملاحظات:
    // - بعد delete، الخاصية لم تعد موجودة داخل الكائن، لهذا السبب ستظهر undefined.
    // - هذه بالضبط النقطة التي يريدها الواجب: إثبات أنك حذفت المفتاح قبل العرض.
}
