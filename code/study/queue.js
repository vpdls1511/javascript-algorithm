const arr = []

let rear = -1, front = -1

const queue = () => {
    return {
        enqueue: (data) => {
            rear++
            arr[rear] = data
        },
        dequeue: () => {
            front++
        },
        printQueue : () => {
            if(front === rear) {
                console.log('isEmpty')
            }else{
                for(let i = front ; i < rear ; i++){
                    console.log(`[${i+1}] = ${arr[i+1]}`)
                }
            }
            console.log(' ')
        }
    }
}

queue().printQueue()
queue().enqueue('1')
queue().enqueue('2')
queue().printQueue()
queue().enqueue('3')
queue().enqueue('4')
queue().enqueue('5')
queue().dequeue()
queue().dequeue()
queue().dequeue()
queue().dequeue()
queue().printQueue()
