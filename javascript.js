$("#body").hide()
$(document).ready(()=>{
    $("#loader").hide()
    $("#body").fadeIn(150)
    function randomNumber(min, max) { 
        return Math.random() * (max - min) + min;
    }
    const list_item1 = [
        `<img class="img_list" src="https://cdn.pixabay.com/photo/2013/07/13/10/41/hat-157581__340.png" alt="Items">Price: <span>24USD</span></li>`,
        `<img class="img_list" src="https://stylesatlife.com/wp-content/uploads/2020/08/Jeep-Side-Crossbody-Bag.jpg.webp" alt="Items">Price: <span>20USD</span></li>`,
        `<img class="img_list" src="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Z/Y/121271_1626004689.jpg" alt="Items">Price: <span>14USD</span></li>`
    ]

    const list_item2 = [
        `<img class="img_list" src="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/L/W/153127_1555751339.jpg" alt="Items">Price: <span>20USD</span></li>`,
        `<img class="img_list" src="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/30/316606/1.jpg?3322" alt="Items">Price: <span>18USD</span></li>`,
        `<img class="img_list" src="https://cf.ltkcdn.net/handbags/images/orig/266873-1600x1030-how-measure-purse-correctly.jpg" alt="Items">Price: <span>19USD</span></li>`
    ]

    const list_item3 = [
        `<img class="img_list" src="https://di2ponv0v5otw.cloudfront.net/posts/2022/03/21/6238e936e609ab4438ef474d/m_6238e94488cce38b74f3b59b.jpg" alt="Items">Price: <span>20USD</span></li>`,
        `<img class="img_list" src="https://media.gettyimages.com/id/1204852047/photo/close-up-of-shoes-against-green-background.jpg?s=612x612&w=gi&k=20&c=WTAZlxP0LxiLHgHFpNOmcrHJvldIQph2kP56Bv1grXU=" alt="Items">Price: <span>18USD</span></li>`,
        `<img class="img_list" src="https://www.supremecommunity.com/u/season/add/201905300fca76621d2c440797162a5098589d6b_sqr.jpg" alt="Items">Price: <span>19USD</span></li>`
    ]

    const list_item4 = [
        `<img class="img_list" src="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/F/Q/87573_1646336598.jpg" alt="Items">Price: <SPan>18USD</SPan>`,
        `<img class="img_list" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVrh_G201kfbd7QVM4A5faqcTZ4FcDsM3hmQ&usqp=CAU" alt="Items">Price: <span>20USD</span>`,
        `<img class="img_list" src="https://www.shutterstock.com/image-photo/pair-pink-sport-shoes-on-260nw-228691018.jpg" alt="Items">Price: <span>24USD</span>`
    ]

    const list_item5 = [
        `<img class="img_list" src="https://static4.depositphotos.com/1000865/425/i/600/depositphotos_4256838-stock-photo-black-leather-belt.jpg" alt="Items">Price: <span>21USD</span>`,
        `<img class="img_list" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgeJgDNpCBSXwL8C48Vpnbs9nqMCyE0UXi1vETvpj7ODswm8tRVJKHJbZeRe2r68O54NY&usqp=CAU" alt="Items">Price: <span>24USD</span>`,
        `<img class="img_list" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTI9yLW5eYaYH-zOaFcD1nx75bA36mqr1V3Q&usqp=CAU" alt="Items">Price: <span>28USD</span>`
    ]

    const list_item6 = [
        `<img class="img_list" src="https://i.pinimg.com/474x/10/58/75/105875bf48fcc1884400e95c41cc05d8.jpg" alt="Items">Price: <span>11USD</span>`,
        `<img class="img_list" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjH8RMLUaS6wxZyA1YCzQG2p14HzI2Ab-6-w&usqp=CAU" alt="Items">Price: <span>24USD</span>`,
        `<img class="img_list" src="https://media.istockphoto.com/id/1210106212/photo/black-jacket-and-t-shirt-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=N1PmQECJcxIV9gF1JI2TTpZdhNpGmnQHCpDBjS2Vouk=" alt="Items">Price: <span>24USD</span>`
    ]

    const list_item7 = [
        `<img class="img_list" src="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/74/5994231/1.jpg?6875" alt="Items">Price: <span>11USD</span>`,
        `<img class="img_list" src="https://lagmall.com.ng/wp-content/uploads/2021/05/IMG-20210527-WA0060.jpg" alt="Items">Price: <span>24USD</span>`,
        `<img class="img_list" src="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/09/434494/1.jpg?7444" alt="Items">Price: <span>24USD</span>`
    ]

    const list_item8 = [
        `<img class="img_list" src="https://images.yaoota.com/pBssYorWbfwQDwb9ovzMPFw_4fE=/trim/yaootaweb-production-ng/media/crawledproductimages/ed8303246f3b7a805d968f977df9b1d7e97bf8d1.jpg" alt="Items">Price: <span>11USD</span>`,
        `<img class="img_list" src="https://images.yaoota.com/ZxF1VzHnAyEtFstcm9-IbyNZkXY=/trim/yaootaweb-production-ng/media/crawledproductimages/2775382b128d8206382944a0b42ff932b1de1a50.jpg">Price: <span>24USD</span>`,
        `<img class="img_list" src="https://media.istockphoto.com/id/163208487/photo/male-coat-isolated-on-the-white.jpg?s=612x612&w=0&k=20&c=3Sdq5xnVS2jOYPNXI6JLwAumzyelcP_VgKVW0MVUhwo=" alt="Items">Price: <span>24USD</span>`
    ]

    const image1 = Math.floor(randomNumber(0,3));
    console.log(image1)

    $('#list_item1').html(list_item1[Math.floor(randomNumber(0,3))])

    $('#list_item2').html(list_item2[Math.floor(randomNumber(0,3))])

    $('#list_item3').html(list_item3[Math.floor(randomNumber(0,3))])

    $('#list_item4').html(list_item4[Math.floor(randomNumber(0,3))])

    $('#list_item5').html(list_item5[Math.floor(randomNumber(0,3))])

    $('#list_item6').html(list_item6[Math.floor(randomNumber(0,3))])

    $('#list_item7').html(list_item7[Math.floor(randomNumber(0,3))])

    $('#list_item8').html(list_item8[Math.floor(randomNumber(0,3))])
    
});
$('#menu').click(
    function (){
        $('.menu').toggle('slide')
    }
)
