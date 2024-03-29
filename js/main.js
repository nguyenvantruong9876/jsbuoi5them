// bai tinh thu nhap ca nhan
//Bảng Thu nhập chịu thuế(triệu)
const Den_60 = 0.05;
const Den_60den_120 = 0.1;
const den_120den_210 = 0.15;
const den_210den_384 = 0.2;
const den_384den_624 = 0.25;
const den_624den_960 = 0.3;
const tren960 = 0.35;

function thuecanhan() {
    var hoten = document.getElementById("nhaphoten").value;
    var thunhapnam = Number(document.getElementById("tongthunhap").value);
    var phuthuoc = Number(document.getElementById("phuthuoc").value);

    var thuephaichiu = thunhapnam - 4e+6 - 16e+5 * phuthuoc;
    var thue;
    if (thuephaichiu > 0 && thuephaichiu <= 6e7) {
        
        thue = Den_60 * thuephaichiu;
    } else if (thuephaichiu > 6e7 && thuephaichiu <= 12e7) {
     
        thue = Den_60den_120 * thuephaichiu;
    } else if (thuephaichiu > 12e7 && thuephaichiu <= 21e7) {
   
        thue = den_120den_210 * thuephaichiu;
    } else if (thuephaichiu < 21e7 && thuephaichiu <= 384e6) {
   
        thue = den_210den_384 * thuephaichiu;
    } else if (thuephaichiu < 384e6 && thuephaichiu <= 624e6) {
 
        thue = den_384den_624 * thuephaichiu;
    } else if (624e6 < thuephaichiu && thuephaichiu <= 960e6) {

        thue = den_624den_960 * thuephaichiu;
    }
    else if (thuephaichiu > 960e6) {
    
        thue = tren960 * thuephaichiu;
    } else {
        alert("Số tiền thu nhập không hợp lệ")
    }
    document.getElementById("txtResulttienthue").innerHTML = "Họ Tên :" + hoten + ";Tiền thuế thu nhập cá nhân :" + thue.toLocaleString() + " VND";
}
document.getElementById("btntinhtien").onclick = thuecanhan;


// Tính tiền cáp

function formloaiKhach() {
    var loaikhach = document.getElementById('khachhang').value;
    var soketnoi = document.getElementById('nhapketnoi');

    if (loaikhach == "doanhnghiep") {
        soketnoi.style.display = "block";
    } else {
        soketnoi.style.display = "none";
    }
}

function tientinhcap() {
    var loaikhach = document.getElementById('khachhang').value;
    var makhach = document.getElementById('nhapmakhachhang').value;
    var sokenh = Number(document.getElementById('nhapmasokenh').value);
    var soketnoi = Number(document.getElementById('nhapketnoi').value);
    var phi = 0;

    if (loaikhach == 'nhadan') {
        (phi = 4.5 + 20.5 + 7.5 * sokenh);
    } else if (loaikhach == 'doanhnghiep') {
        if (soketnoi <= 10) {
            phi = 15 + 75 + (50 * sokenh);
        } else {
            phi = 15 + 75 + (50 * sokenh) + (soketnoi - 10) * 5;
        }

    } else {
        alert("Hãy chọn loại khách hàng")
    } 

    document.getElementById("txtResultiencap").innerHTML = "Mã khách hàng :" + makhach + ";Tiền cáp :" + phi.toLocaleString() + " $";
}
document.getElementById("btntiencap").onclick = tientinhcap;
