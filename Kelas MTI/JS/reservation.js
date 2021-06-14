$(document).ready(function() {
    const navbarLinks = document.getElementsByClassName("navbar-links")[0]
    const toggleButton = document.getElementsByClassName("toggle-button")[0]

    toggleButton.addEventListener("click", function() {
    
        navbarLinks.classList.toggle("active")
    })
})

function validate() {
    var valid = true
    if(!$("#name").val().match("^[a-zA-Z ]+$")){
        $(".name-error").css("display", "initial")
        valid = false
    } else {
        $(".name-error").css("display", "none")
    }
    if(!$("#telp").val().match("[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$")){
        $(".telp-error").css("display", "initial")
        valid = false
    } else {
        $(".telp-error").css("display", "none")
    }
    if($("#people").val() == ""){
        $(".people-error").css("display", "initial")
        valid = false
    } else {
        $(".people-error").css("display", "none")
    }
    const d = new Date()
    var checkDate = new Date($("#date").val())
    if($("#date").val() == ""){
        $(".date-error").css("display", "initial")
        valid = false
    } else if(checkDate.getDate() <= d.getDate() && checkDate.getMonth() <= d.getMonth() && checkDate.getFullYear() <= d.getFullYear()){
        $(".date-error").css("display", "initial")
        valid = false
    } else {
        $(".date-error").css("display", "none")   
    }
    if(parseInt($("#time").val().substr(0,2) )< 9 || parseInt($("#time").val().substr(0,2)) > 20 || $("#time").val() == ""){
        $(".time-error").css("display", "initial")
        valid = false
    } else {
        $(".time-error").css("display", "none")
    }
    const coupon = ["ABPSFEB", "ABMGJUL", "ABXDGRL"]
    var usedCode = ""
    coupon.forEach(function(code){
        if(code == $("#coupon").val()){
            usedCode += code
        }
    })
    if($("#coupon").val() != "" && usedCode == ""){
        valid = false
        $(".coupon-error").css("display", "initial")
    } else {
        $(".coupon-error").css("display", "none")
    }
    const month = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
    if(valid){
        if(usedCode != ""){
            alert("Selamat "+ $("#name").val() +" ! Reservasi berhasil dilakukan!!! \nAnda telah menggunakan kode kupon : " + usedCode + "\nmohon datang pada jam " + $("#time").val() + " di tanggal " + checkDate.getDate() + " " + month[checkDate.getMonth()] + " " + checkDate.getFullYear() + "\nkami akan menghubungi nomor " + $("#telp").val() + " untuk mengkonfirmasi reservasi." )
        } else {
            alert("Selamat "+ $("#name").val() +" ! Reservasi berhasil dilakukan!!! \nmohon datang pada jam " + $("#time").val() + " di tanggal " + checkDate.getDate() + " " + month[checkDate.getMonth()] + " " + checkDate.getFullYear() + "\nkami akan menghubungi nomor " + $("#telp").val() + " untuk mengkonfirmasi reservasi.")  
        }
    }
    return false
}