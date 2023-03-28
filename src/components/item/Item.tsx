import Badge from "@/components/badge/Badge";
import {BadgeEnum} from "@/components/badge/BadgeEnum";
import {ItemDescrType, ItemPhotosType} from "@/pages";

import s from './item.module.css'

export type ItemType = {
    arrayData: ItemPhotosType[]
    currentDescriptions: ItemDescrType[]
}

const Item = ({arrayData, arrayTodos}: ItemType) => {
        return (
            <div className={s.gridContainer}>
                {arrayData.map((photo, index) => {
                    return (<div key={photo.id} className={s.container}>
                        <img className={s.img} src={photo.url} alt={photo.title}/>
                        <h4 className={s.title}>{photo.title}</h4>
                        <span className={s.description}>{arrayTodos[index]?.title}</span>
                        <Badge>{Math.random() > 0.5 ? BadgeEnum.BADGE_NEW : BadgeEnum.BADGE_TOP}</Badge>
                    </div>)
                })}
            </div>
        );
    }
;

export default Item;

