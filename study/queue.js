const arr = []

let rear = -1, front = -1

const queue = () => {
    return {
        enqueue: (data) => {
            front++
            arr[front] = data
        },
        dequeue: () => {
            rear++
        },
        printQueue : () => {
            if(front === rear) {
                console.log('isEmpty')
            }else{
                for(let i = rear ; i < front ; i++){
                    console.log(arr[i+1])
                }
            }
        }
    }
}

queue().printQueue()
queue().enqueue('1')
queue().enqueue('2')
queue().printQueue()
queue().enqueue('3')
queue().dequeue()
queue().printQueue()
