import { Card } from '../interfaces/card';
import { CardContainer, CardImage, InfoContainer, Icon, IconContainer } from './styled-components';

export default function Cards({
    cards,
    handleFavorite,
    handleDeleteCard,
}: {
    cards: Card[];
    handleFavorite: (index: number) => void;
    handleDeleteCard: (index: number) => void;
}) {

    return (
        <div>
            {cards.map((card, index) => (
                <CardContainer key={index}>
                    <h2>{card.title}</h2>
                    <CardImage src={card.link} alt={card.title} />
                    <InfoContainer>
                        <p>{card.description}</p>
                        <IconContainer>
                            <Icon onClick={() => handleDeleteCard(index)} src="https://cdn1.iconfinder.com/data/icons/hawcons/32/699013-icon-27-trash-can-512.png" title="Delete icon" />
                            <Icon onClick={() => handleFavorite(index)} src={card.favorite ? ("https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png") : ("https://clipart-library.com/images/Bcar7eALi.png")} title="Favorite icon" />
                        </IconContainer>
                    </InfoContainer>
                </CardContainer>
            ))}
        </div>
    );
}