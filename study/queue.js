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
                    console.log(arr[i+1])
                }
            }
        }
    }
}

queue().printQueue()
queue().enqueue('2')
queue().enqueue('1')
queue().printQueue()
queue().enqueue('3')
queue().dequeue()
queue().printQueue()
