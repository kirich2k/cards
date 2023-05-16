import React from "react";
import "./main.css";
import Cards from "../arrays/card";

const Main: React.FC = () => {
    const addFavoritre = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.currentTarget.classList.toggle("-active");
    };
    return (
        <>
            <article className="main">
                <section className="main__container card-container">
                    {Cards.map(
                        ({
                            id,
                            img,
                            sale,
                            name,
                            lastPrice,
                            newPrice,
                            size,
                        }) => (
                            <div className="card-container__item card" key={id}>
                                <div className="card__img-container">
                                    <div className="card__sale">-{sale}%</div>
                                    <div className="card__img">
                                        <img
                                            src={img}
                                            alt="img"
                                            loading="lazy"
                                        />
                                    </div>

                                    <button
                                        className="card__favorite"
                                        onClick={(e) => addFavoritre(e)}
                                    >
                                        <svg>
                                            <use xlinkHref="#favorite" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="card__description">
                                    <span className="card__title">{name}</span>
                                    <div className="card__price">
                                        <span className="card__last-price">
                                            {lastPrice}руб.
                                        </span>
                                        <span className="card__new-price">
                                            {newPrice}руб.
                                        </span>
                                    </div>
                                    <div className="card__footer">
                                        <div className="card__size size">
                                            <span className="size__title">
                                                Размеры в наличии:
                                            </span>
                                            <div className="size__container">
                                                {size.map((arr, i) => (
                                                    <button
                                                        className="size__btn"
                                                        key={i}
                                                    >
                                                        {arr}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <button className="card__btn-buy">
                                            Купить
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </section>
            </article>
            <svg display="none">
                <symbol
                    width="26"
                    height="22"
                    viewBox="0 0 26 22"
                    id="favorite"
                >
                    <g>
                        <path d="M18.1767 1.93408C16.95 1.93408 15.8253 2.29801 14.834 3.01577C13.8836 3.70389 13.2508 4.58035 12.8783 5.21767C12.5058 4.58031 11.873 3.70389 10.9226 3.01577C9.93129 2.29801 8.80662 1.93408 7.5799 1.93408C4.1566 1.93408 1.57504 4.5555 1.57504 8.03176C1.57504 11.7873 4.79572 14.3568 9.67141 18.2467C10.4994 18.9073 11.4379 19.6561 12.4133 20.4546C12.5419 20.56 12.707 20.6181 12.8783 20.6181C13.0496 20.6181 13.2148 20.56 13.3433 20.4547C14.3189 19.656 15.2573 18.9072 16.0857 18.2463C20.9609 14.3568 24.1816 11.7873 24.1816 8.03176C24.1816 4.5555 21.6 1.93408 18.1767 1.93408Z" />
                    </g>
                </symbol>
            </svg>
        </>
    );
};

export default Main;
