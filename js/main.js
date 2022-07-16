// bai tinh thu nhap ca nhan
//Bảng Thu nhập chịu thuế(triệu)
const Den_60  = 0.05;
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

    var thuephaichiu = thunhapnam - 4e+6 - 16e+5 * phuthuoc ;
    var thue;
    if ( thuephaichiu > 0 && thuephaichiu <= 6e7) {
        console.log("Giá 60 Triệu")
        thue = Den_60 * thuephaichiu;
    } else if (thuephaichiu > 6e7&& thuephaichiu <= 12e7) {
        console.log("Giá 60 Đến 120")
        thue = Den_60den_120 * thuephaichiu;
    } else if (thuephaichiu > 12e7 && thuephaichiu <= 21e7) {
        console.log("Giá 120 Đến 210")
        thue = den_120den_210 * thuephaichiu;
    } else if (thuephaichiu < 21e7 && thuephaichiu <= 384e6) {
        console.log("Giá 210 Đến 384")
        thue = den_210den_384 * thuephaichiu;
    } else if (thuephaichiu < 384e6 && thuephaichiu <= 624e6) {
        console.log("Giá 384 Đến 624")
        thue = den_384den_624 * thuephaichiu;
    }else if (624e6 < thuephaichiu && thuephaichiu <= 960e6) {
        console.log("Giá 624 Đến 960")
        thue = den_624den_960 * thuephaichiu;
    }
    else if (thuephaichiu > 960e6) {
        console.log("Giá Thuế Còn lại")
        thue = tren960 * thuephaichiu;
    } else {
        alert("Số tiền thu nhập không hợp lệ")
    }
    document.getElementById("txtResulttienthue").innerHTML ="Họ Tên :" + hoten + ";Tiền thuế thu nhập cá nhân :" + thue.toLocaleString() + " VND";
}
document.getElementById("btntinhtien").onclick = thuecanhan;
