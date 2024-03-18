const btnCTV = document.querySelector("#updateToCTV");
const btnUser = document.querySelector("#toUser");
const selectLanguage1 = document.querySelector("#selectLanguage1");
const selectLanguageTran1 = document.querySelector("#selectLanguageTran1");


let html1 = "";
valueLanguages.forEach((e) => {
    html1 += `<option value=${e.value}>${e.lang}</option>`;
    selectLanguage1.innerHTML = html1;
   
    selectLanguageTran1.innerHTML = html1;
    
});
//selectLanguage1.addEventListener("change", () => {
//    console.log('1234')
//    let html1 = "";
//    if (selectLanguage1.value === "2") {
//        const newValueLang = valueLanguages.filter((e) => e.value !== 2);
//        newValueLang.forEach((e) => {
//            html1 += `<option value=${e.value}>${e.lang}</option>`;

//            selectLanguageTran1.innerHTML = html1;
//        });
//    } else {
//        valueLanguages.forEach((e) => {
//            html1 += `<option value=${e.value}>${e.lang}</option>`;
//            selectLanguageTran1.innerHTML = html1;
//        });
//    }

//});

//-------------MANAGER/WORD-------------------------------
const deleteWord = (id) => {
    const datadelete = {
        Id: id,
    };

    if (confirm("Bạn có chắc chắn muốn xóa Từ này?")) {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState !== 4 && xhttp.status !== 200) {
                console.log(xhttp.statusText);
            } else if (xhttp.readyState == 4 && xhttp.status == 200) {
                window.location = "/manager/word";
            }
        };
        xhttp.open("DELETE", "/manager/word/delete", true);
        xhttp.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        xhttp.send(JSON.stringify(datadelete));
    }
};

const getWordById = (event, id) => {
    /*console.log(event, id)*/
    const row = event.target.closest('tr');

    const idRow = row.querySelector('#id')?.innerText?.trim();
    const language = row.querySelector('#language').innerText.trim();
    const languageTrans = row.querySelector('#languageTrans').innerText.trim();
    const wordtypes = row.querySelector('#wordtypes').innerText.trim();
    const idUser = row.querySelector('#idUser').innerText.trim();
    const word = row.querySelector('#word').innerText.trim();
    const example = row.querySelector('#example').innerText.trim();
    const definition = row.querySelector('#definition').innerText.trim();
    const wordTrans = row.querySelector('#wordTrans').innerText.trim();

    document.getElementById('selectLanguage1').value = language;
    document.getElementById('selectLanguageTran1').value = languageTrans;
    document.getElementById('WordTypes').value = wordtypes;
    document.getElementById('Id_user').value = idUser;
    document.getElementById('Word').value = word;
    document.getElementById('Example').value = example;
    document.getElementById('Definition').value = definition;
    document.getElementById('WordTrans').value = wordTrans;

    document.getElementById('btnAdd').innerHTML = "Update";
};


function dataword() {
    const language = document.getElementById('selectLanguage1').value;
    const idWordType = document.getElementById('WordTypes').value;
    const word = document.getElementById('Word').value;
    const definition = document.getElementById('Definition').value;
    const languageTrans = document.getElementById('selectLanguageTran1').value;
    const idUser = document.getElementById('Id_user').value;
    const example = document.getElementById('Example').value;
    const wordTrans = document.getElementById('WordTrans').value;
    const id = document.getElementById("id");
    const idtxt = id.innerText;
    const data = {
        Id: idtxt,
        IdLanguage: language,
        IdLanguageTrans: languageTrans,
        IdWordtype: idWordType,
        IdUser: idUser,
        SWord: word,
        SExample: example,
        SDefinition: definition,
        SWordTrans: wordTrans
    };
    console.log(idtxt)
    console.log(example)
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState !== 4 && xhttp.status !== 200) {
            console.log(xhttp.statusText);
        } else if (xhttp.readyState == 4 && xhttp.status == 200) {
            window.location = "/manager/word";
        }
    };
    var btnadd = document.getElementById("btnAdd");
    var btnaddtext = btnadd.innerText;
    if (btnaddtext.trim() === "Add") {
        xhttp.open("POST", "/addNewWord", true);
        xhttp.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        xhttp.send(JSON.stringify(data));
    } else {
        xhttp.open("POST", "/manager/word/edit", true);
        xhttp.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        xhttp.send(JSON.stringify(data));
    }
};
//-------------------------------MANAGER/USER------------------------------------
const upgradeRole = (id, role) => {
  const dataPost = {
    Id: id,
    SRole: role,
  };
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState !== 4 && xhttp.status !== 200) {
      console.log(xhttp.statusText);
    } else if (xhttp.readyState == 4 && xhttp.status == 200) {
      window.location = "/manager/user";
    }
  };
  xhttp.open("POST", "/manager/user/upgrade", true);
  xhttp.setRequestHeader("Content-Type", "application/json; charset=utf-8");
  xhttp.send(JSON.stringify(dataPost));
};

const deleteuser = (id) => {
  const datadelete = {
    Id: id,
  };

  if (confirm("bạn có chắc chắn muốn xóa user này?")) {
    const xhttp = new xmlhttprequest();
    xhttp.onreadystatechange = () => {
      if (xhttp.readystate !== 4 && xhttp.status !== 200) {
        console.log(xhttp.statustext);
      } else if (xhttp.readystate == 4 && xhttp.status == 200) {
        window.location = "/manager/user";
      }
    };
    xhttp.open("delete", "/manager/user/delete", true);
    xhttp.setrequestheader("content-type", "application/json; charset=utf-8");
    xhttp.send(json.stringify(datadelete));
  }
};



