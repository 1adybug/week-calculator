import { IonDatetime, IonDatetimeButton, IonModal, setupIonicReact } from "@ionic/react"
import { FC, useState } from "react"

setupIonicReact({
    mode: "ios"
})

const start = new Date("2024-09-09T00:00:00").getTime()

const App: FC = () => {
    const [time, setTime] = useState(Date.now())

    const week = Math.floor((time - start) / (7 * 24 * 60 * 60 * 1000))

    return (
        <div className="flex h-full flex-col items-center justify-center gap-4">
            <div>
                <IonDatetimeButton datetime="datetime" />
            </div>
            <IonModal keepContentsMounted={true}>
                <IonDatetime
                    id="datetime"
                    presentation="date"
                    firstDayOfWeek={1}
                    onChange={console.log}
                    hourValues={12}
                    minuteValues={0}
                    onIonChange={e => setTime(new Date(e.target.value as string).getTime())}
                />
            </IonModal>
            <div>本周是{week % 2 === 0 ? "小周" : "大周"}</div>
        </div>
    )
}

export default App
