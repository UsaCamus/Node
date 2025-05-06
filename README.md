# Node
npm init
npm install node-modules
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node
npm install express body-perser
// npm install body-parser
npm install mongoose
echo {"presets": ["@babel/preset-env"]} >> .babelrc

npm run bulid
npm run start

1. Operator 
    in                      $in:['test-uer-0.7564005182408331','test-uer-0.13597298704687844']
    and                     findOneAndUpdate({ username: 'update-future-user', password: '1112223344' }
    or                      $or: [ { password: '1112223344',} , {username: 'usa sawadee'} ]
    less than               $lt
    greater than            $qt
    less than or Equal      $lte
    greater than or Equal   $qte

2. Partail Search
    - regular expression
    $regex: /^test/,    //ขึ้นต้น
    $regex: /2$/,       //ลงท้าย
    $regex: /Test/i,    //sensitive ตัวเล็กใหญ่
//projection เลือกเฉพาะฟิวส์ที่ต้องการ หลังจาก await model เช่น
async function findBySearch(){
    const result = await PostModel.find(
        {
            title: {
                $regex: /^test/,    //ขึ้นต้น
            }
        },
        {
            //projection เลือกเฉพาะฟิวส์ที่ต้องการ
            title: true,
            status: true,
        }
    );
    console.log('result', result);
}

3. Pagination
- Offset based pagination 
Simple with limit and skip คือ การสเกลทั้งหมด ข้ามหน้าได้
- Cursor-based pagination คือ การกำหนดขอบเขต โดยต้องมีจุดเริ่มต้น id แต่ข้ามหน้าไม่ได้

