/**Quản lý tuyển sinh */
function tinhDiem() {
    // Input
    var thiSinh = document.querySelector('#nhapTenTS').value;
    var diemA = Number(document.querySelector('#nhapDiemA').value);
    var diemB = Number(document.querySelector('#nhapDiemB').value);
    var diemC = Number(document.querySelector('#nhapDiemC').value);
    var diemHoiDong = Number(document.querySelector('#diemHoiDong').value);
    var khuVuc = Number(document.querySelector('#chonKhuVuc').value);
    var doiTuong = Number(document.querySelector('#chonDoiTuong').value);
    var inKetQua = document.querySelector('#inKetQua');

    // Process
    var diemNhapVao = nhanGiaTri(diemA, diemB, diemC, khuVuc, doiTuong);
    if (diemNhapVao >= diemHoiDong) {
        inKetQua.innerHTML = 'Chúc mừng thí sinh ' + thiSinh + ' đã đậu kì thi với số điểm là ' + diemNhapVao + ' đ'; 
    } else {
        inKetQua.innerHTML = 'Thí sinh ' + thiSinh + ' đã rớt kì thi với số điểm là ' + diemNhapVao + ' đ';
    }

}

// Function lấy giá trị điểm nhập vào
function nhanGiaTri(diemA, diemB, diemC, khuVuc, doiTuong) {
    var diemUuTien = diemA + diemB + diemC + khuVuc + doiTuong;
    return diemUuTien;
}



/**Tính tiền điện */
function tinhTienDien() {
    // Input
    var tenKH = document.querySelector('#tenKH').value;
    var dienTieuThu = Number(document.querySelector('#dienTieuThu').value);
    var inKetQua = document.querySelector('#inTienDien');

    // Process
    var thanhTien = nhanTienDien(dienTieuThu);
    
    // Ouput
    inKetQua.innerHTML = 'Hóa đơn tiền điện tháng này của ông/ bà ' + tenKH + ' là ' + thanhTien + ' vnđ';
}

// Function nhận và tính toán giá trị nhập vào
function nhanTienDien(nhapSoDien) {
    var tongTien = 0;
    if (nhapSoDien > 0 && nhapSoDien <= 50) {
        tongTien = nhapSoDien * 500;
    } else if (nhapSoDien > 50 && nhapSoDien <= 100) {
        tongTien = (50 * 500) + ((nhapSoDien - 50) * 650);
    } else if (nhapSoDien > 100 && nhapSoDien <= 200) {
        tongTien = (50 * 500) + (50 * 650) + ((nhapSoDien - 100) * 850); 
    } else if (nhapSoDien > 200 && nhapSoDien <= 350) {
        tongTien = (50 * 500) + (50 * 650) + (100 * 850) + ((nhapSoDien - 200) * 1100);
    } else {
        tongTien = (50 * 500) + (50 * 650) + (100 * 850) + (150 * 1100) + ((nhapSoDien -350) * 1300);
    }
    return tongTien.toLocaleString();
}