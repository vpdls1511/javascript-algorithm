let i = []
let cnt = 0

const stack = () => {
    return {
        push: () => {
            i[i.length] = cnt++
            console.log(i)
        },
        pop: () => {
            i.splice(-1)
            console.log(i)
        },
        peek: () => {
            console.log(i[i.length-1])
        },
        empty: () => {
            console.log(i.length === 0)
        },
        search: (targetData) => {
            let current = -1;
            for(let target in i){
                if(i[target] === targetData) current = target
            }
            current !== -1 ? console.log(`"${targetData}"은/는 ${current} 번째 인덱스에 있습니다`) : console.log(`"${targetData}"은/는 존재하지 않습니다`);
        }
    }
}

stack().empty()
stack().push()
stack().push()
stack().push()
stack().push()
stack().search(3)
stack().pop()
stack().search(3)
stack().peek()
