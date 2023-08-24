import React, {useMemo} from 'react';
import CustomsPortal from "../CustomsPortal";

const PhotoItem = ({item, index, portal, isActive}) => {
    const {openPortal, closePortal, showPortal, activeIndex, getResponse} = portal
    const activeClassPortal = useMemo(() => {
        return showPortal === false ? 'close-portal' : ''
    }, [showPortal])
    return (
        <article
            onClick={openPortal(item, index)}
            className={'photo_item'}
        >
            <figure>
                <img
                    src={item.url}
                    alt={item.title}
                />
            </figure>
            {
                isActive && activeIndex.current === index &&
                <CustomsPortal
                    onClick={(event) => closePortal(event)}
                    className={'modal_image'}>
                    <figure className={activeClassPortal}>
                        <img src={getResponse.url} alt={getResponse.title}/>
                    </figure>
                </CustomsPortal>
            }
        </article>
    );
};

export default PhotoItem;