// JSON

const obj = [
    [
        {
            "nome": "Anthony",
            "idade": 19,
            "esta_trabalhando": false,
            "hobbies": [
                "Programar",
                "Correr",
                "Ler"
            ],
            "detalhes_profissao": {
                "profissão": "Developer",
                "empresa": "Microsoft"
            }
        }
    ],
]

function obj_to_json() {
    window.alert("converting info....")
    // converter obj para json
    const jsonData = JSON.stringify(obj)
    console.log(typeof jsonData)
    window.console.log(jsonData)
    window.document.getElementById('info').value = jsonData
    window.alert('Here is the convertion: ' + jsonData)
}

function json_to_obj() {
    window.alert("converting info....")
    // converter json para obj
    const jsonData = JSON.stringify(obj)
    const objJson = JSON.parse(jsonData)
    console.log(typeof objJson)
    window.console.log(objJson)
    window.document.getElementById('info').value = objJson
    window.alert('press F12 then go to the console. ')
}

function copy() {
    window.alert("Copied");
    const btn_copiar = addEventListener('click', () => {
        btn_copiar = window.document.getElementById('info').select();
        window.document.execComand("copy");
    })
}

objJson.map((pessoa) => {
    window.console.log(pessoa.name)
})