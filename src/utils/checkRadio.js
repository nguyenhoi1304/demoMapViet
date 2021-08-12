const checkRadio = () => {
        var checkbox = document.getElementsByName("radio-button-demo");
        for (var i = 0; i < checkbox.length; i++) {
          if (checkbox[i].checked === true) {
            var checkValue = checkbox[i].value;
            console.log(checkValue)
          }
        }
}

export default checkRadio