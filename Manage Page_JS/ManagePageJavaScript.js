function add() {   //회원 입력
    const table = document.getElementById("list");

    const Newline = table.insertRow();

    const Cell1 = Newline.insertCell(0); // 첫 번째 셀 생성
    const Cell2 = Newline.insertCell(1); // 두 번째 셀 생성
    const Cell3 = Newline.insertCell(2); // 세 번째 셀 생성
    const Cell4 = Newline.insertCell(3); // 네 번째 셀 생성
    const Cell5 = Newline.insertCell(4); // 다섯 번째 셀 생성
    const Cell6 = Newline.insertCell(5); // 여섯 번째 셀 생성
    const Cell7 = Newline.insertCell(6); // 일곱 번째 셀 생성

    Cell1.innerHTML = "<th><input type='checkbox' id='Check' name='CheckBox' class='allCheck()'></th>"
    Cell2.innerText = document.getElementById("ID").value;
    Cell3.innerText = document.getElementById("Fullname").value;
    Cell4.innerText = document.getElementById("PH").value;
    Cell5.innerText = document.getElementById("email").value;
    Cell6.innerText = document.getElementById("Postal").value;
    Cell7.innerText = document.getElementById("adress").value;
    // 셀에 넣을 값들을 각각의 id들의 text에 입력한 value 값으로 입력
}

    


function search() {  //회원 검색
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("Name_Input");
    filter = input.value.toUpperCase();
    table = document.getElementById("list");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2]; // "이름"만을 기준으로 검색 가능
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function allDelete() { //리스트 전체선택
    const checkboxes = document.querySelectorAll('input[name="CheckBox"]');
    const checked = document.querySelectorAll('input[name="CheckBox"]:checked');
    const selectAll= document.querySelector('input[name="selectall"]');
                
    if(checkboxes.length === checked.length) {
        selectAll.checked = true;
    }
    else {
        selectAll.checked = false;
    }
}

function selectAll(selectAll) {
    const checkboxes = document.getElementsByName("CheckBox");
                
    checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked
    })
}

function checkDelete() { //선택 리스트 삭제
    var checkDel = document.getElementById('list');
    for(var i=1; i<checkDel.rows.length; i++) {
    var chkBox = checkDel.rows[i].cells[0].childNodes[0].checked;
                    
    if(chkBox) {
        checkDel.deleteRow(i);
        i--;
    }
    }
}