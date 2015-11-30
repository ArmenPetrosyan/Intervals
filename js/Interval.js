
/**
 * Класс реализует объект Интервал
 * @constructor Interval
 *
 * @param begin первый элемент интревала
 * @param end последний элемент интевала
 */
function Interval(begin, end){

    if(end > begin){
        var start = begin;
        var finish = end;
    }else{
        start = end;
        finish = begin;
    }

    return {
        'length'  : 2,
        'numbers' : (begin && end)?[start , finish]:[],
        'add'     : function(elem){
            this.numbers.push(elem);
        }
    }
}

/**
 * Класс реализует операции над Интервалами
 * @constructor IntervalHandler
 */
function IntervalHandler(){

   function max(arr){
       var max = arr[0];
       for (var i = 0; i < arr.length; i++){
           if (arr[i] > max){
               max = arr[i];
           }
       }
       return max;
   }

   function min(arr){
       var min = arr[0];
       for (var i = 0; i < arr.length; i++){
           if (arr[i] < min){
               min = arr[i];
           }
       }
       return min;
   }

   return{

       /**
        * Додавання інтервалів довіри (2)
        * @param A
        * @param B
        * @returns {Interval}
        */
       'add' : function(A,B){
           var tmpInt = new Interval();

           for(var i = 0; i < A.length; i++){
              tmpInt.add(A.numbers[i] + B.numbers[i]);
           }

           return tmpInt;
       },

       /**
        * Віднімання інтервалів довіри (3)
        * @param A
        * @param B
        * @returns {Interval}
        */
       'substract': function(A,B){
           var tmpInt = new Interval(),
               j = A.length-1;

           for(var i = 0; i < A.length; i++){
               tmpInt.add(A.numbers[i] - B.numbers[j]);
               j--;
           }

           return tmpInt;
       },

       /**
        * Представлення чіткого числа у вигляді інтервалу довіри (4)
        * @param num Чітке число
        * @returns {Interval}
        */
       'createInt' : function(num){
           return new Interval(num,num);
       },

       /**
        * Відображення інтервалу довіри (5)
        * @param A
        * @returns {Interval}
        */
       'reflect' : function(A){
           return new Interval(-A.numbers[1], -A.numbers[0]);
       },

       /**
        * Множення інтервалів довіри (6)
        * @param A
        * @param B
        * @returns {Interval}
        */
       'multiply' : function(A,B){
           var tmpNums = [],
               tmpInt = new Interval();

           for(var i = 0; i < A.length; i++){
               for(var j = 0; j < B.length; j++){
                   tmpNums.push(A.numbers[i] * B.numbers[j]);
               }
           }

           tmpInt.add(min(tmpNums));
           tmpInt.add(max(tmpNums));

           return tmpInt;
       },

       /**
        * Ділення інтервалів довіри (7)
        * @param A
        * @param B
        * @returns {Interval}
        */
       'divide' : function(A,B){
           return new Interval(A.numbers[0] / B.numbers[1], A.numbers[1] / B.numbers[0]);
       },

       /**
        * Ділення інтервалів довіри (за гіпотезою) (7')
        * @param A
        * @param B
        * @returns {Interval}
        */
       'divideHyp' : function(A,B){
           var tmpNums = [],
               tmpInt = new Interval();

           for(var i = 0; i < A.length; i++){
               for(var j = 0; j < B.length; j++){
                   tmpNums.push(A.numbers[i] / B.numbers[j]);
               }
           }

           tmpInt.add(min(tmpNums));
           tmpInt.add(max(tmpNums));

           return tmpInt;
       },

       /**
        * Інверсія інтервалу довіри (8)
        * @param A Інтервал довіри
        * @returns {Interval}
        */
       'inverse' : function(A){
           return new Interval(1 / A.numbers[1], 1 / A.numbers[0]);
       },

       /**
        * Множення (ділення) інтервалу довіри на невід’ємне число (9)
        * @param A Інтервал довіри
        * @param k Чітке число
        * @returns {Interval}
        */
       'multiplyK' : function(A,k){
           return new Interval(A.numbers[0] * k, A.numbers[1] * k);
       },

       /**
        * Знаходження максимуму двох інтервалів (10)
        * @param A
        * @param B
        * @returns {Interval}
        */
       'max' : function(A,B){
           return new Interval(Math.max(A.numbers[0], B.numbers[0]), Math.max(A.numbers[1], B.numbers[1]));
       },

       /**
        * Знаходження мінімуму двох інтервалів (11)
        * @param A
        * @param B
        * @returns {Interval}
        */
       'min' : function(A,B){
           return new Interval(Math.min(A.numbers[0], B.numbers[0]), Math.min(A.numbers[1], B.numbers[1]));
       }
   }
    //adadadadada
}

