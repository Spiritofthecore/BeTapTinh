var baiToan = "";

function tinhToan() {
  getBaiToan()
  if (baiToan == 'Cong') {
    tinhCong()
  }
  if (baiToan == 'Tru') {
    tinhTru()
  }
  if (baiToan == 'Nhan') {
    tinhNhan()
  }
  if (baiToan == 'Chia') {
    tinhChia()
  }
}

function getBaiToan() {
  var radios = document.getElementsByName('baiToan');
  for (var i = 0, length = radios.length; i < length; i++)
  {
   if (radios[i].checked)
   {
    baiToan = radios[i].value;
    console.log("sap tinh " + baiToan);
    break;
   }
  }
}

function checkTextNum(str) {
  if (!(/[0-9]/.test(str))) {
    return false
  }
  return true
}

function noAlert() {
  document.getElementById("Alert").innerHTML = "";
}

function check() {
  if (document.getElementById("So1").value == "" || document.getElementById("So2").value == "") {
    document.getElementById("Alert").innerHTML = "Chưa nhập số vào ô";
    return false
  }
  if (checkTextNum(document.getElementById("So1").value) == false || checkTextNum(document.getElementById("So2").value) == false) {
    document.getElementById("Alert").innerHTML = "Không được nhập các ký tự khác số";
    return false
  }
  return true
}

function tinhCong() {
  if (check() == true) {
    var soThuNhat = parseInt(document.getElementById("So1").value);
    var soThuHai = parseInt(document.getElementById("So2").value);
    document.getElementById("KetQua").value = soThuNhat + soThuHai;
  }
}

function tinhNhan() {
  if (check() == true) {
    noAlert();
    var soThuNhat = parseInt(document.getElementById("So1").value);
    var soThuHai = parseInt(document.getElementById("So2").value);
    document.getElementById("KetQua").value = soThuNhat * soThuHai;
  }
}

function tinhTru() {
  if (check() == true) {
    noAlert();
    var soThuNhat = parseInt(document.getElementById("So1").value);
    var soThuHai = parseInt(document.getElementById("So2").value);
    document.getElementById("KetQua").value = soThuNhat - soThuHai;
  }
}

function tinhChia() {
  if (check() == true) {
    noAlert();
    var soThuNhat = parseInt(document.getElementById("So1").value);
    var soThuHai = parseInt(document.getElementById("So2").value);
    if (soThuHai == 0) {
      document.getElementById("Alert").innerHTML = "Không được nhập số bị chia bằng 0"
    } else {
      document.getElementById("KetQua").value = soThuNhat / soThuHai
    }
  }
}
