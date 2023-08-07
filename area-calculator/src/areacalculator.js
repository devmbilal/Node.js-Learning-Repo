const pi = 3.14;

const calculateArea = (choice,side,length,breadth,radius) =>{   
    let area = 0.0; 
    // write logic here
     // note that you check the values passed are not null before performing any operation on them
    if (choice =='rectangle' || choice=='circle' || choice=='square') {
        switch (choice) {
            case 'square':
                if (side==null) {
                    area=-1;
                } else {
                    area=4*side;
                }
                break;
            case 'rectangle':
                if (length==null || breadth==null) {
                    area=-1;
                } else {
                    area=length*breadth;
                }
                break;
            case 'circle':
                if (radius==null) {
                    area=-1;
                } else {
                    area=pi*radius*radius;
                }
                break;
        }
    } else {
       area =-1;
    }
    
    return area
}
module.exports = {calculateArea}
