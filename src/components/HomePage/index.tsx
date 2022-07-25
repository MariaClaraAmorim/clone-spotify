import React from "react";

import { Container } from "./styles";

function HomePage() {
  return (
    <Container>
      <h2>Para acompanhar seu dia</h2>
      <section>
        <div className="blocos">
          <div className="opa">
            <img
              src="https://i.scdn.co/image/ab67706f00000003cca6dec3727b440039185da3"
              alt=""
            />
            <label>Esquenta Sertanejo</label>
          </div>
          <div className="opa">
            <img
              src="https://portalpopline.com.br/wp-content/uploads/2021/10/unnamed-2021-10-27T100003.647.jpg"
              alt=""
            />
            <label>Top Brasil</label>
          </div>
          <div className="opa">
            <img
              src="https://i.scdn.co/image/ab67706f0000000307513656a48fee81acc7e27d"
              alt=""
            />
            
            <label>Coleção MPB</label>
          </div>
          <div className="opa">
            <img
              src="https://charts-images.scdn.co/assets/locale_en/regional/daily/region_br_large.jpg"
              alt=""
            />
            <label>Top 50 Brasil</label>
          </div>

          <div className="opa">
            <img
              src="https://i.scdn.co/image/ab67706f00000003cca6dec3727b440039185da3"
              alt=""
            />
            <label>Esquenta Sertanejo</label>
          </div>
          <div className="opa">
            <img
              src="https://portalpopline.com.br/wp-content/uploads/2021/10/unnamed-2021-10-27T100003.647.jpg"
              alt=""
            />
            <label>Top Brasil</label>
          </div>
        </div>
      </section>

      <h2>Tocadas recentemente</h2>
      <section className="otasection">
        <div className="opa">
          <img
            src="https://thisis-images.scdn.co/37i9dQZF1DZ06evO4dI4Ei-large.jpg"
            alt=""
          />
        </div>

        <div className="opa">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>

        <div className="opa">
          <img
            src="https://i.scdn.co/image/ab67616d00001e026235e4bb416ff844549030a7"
            alt=""
          />
        </div>

        <div className="opa">
          <img
            src="https://thisis-images.scdn.co/37i9dQZF1DZ06evO4dI4Ei-large.jpg"
            alt=""
          />
        </div>

        <div className="opa">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>

        <div className="opa">
          <img
            src="https://i.scdn.co/image/ab67616d00001e026235e4bb416ff844549030a7"
            alt=""
          />
        </div>
      </section>

      <h2>100% você</h2>
      <section className="otasection">
        <div className="opa">
          <img
            src="https://daily-mix.scdn.co/covers/on_repeat/PZN_On_Repeat2_LARGE-en.jpg"
            alt=""
          />
        </div>

        <div className="opa">
          <img
            src="https://misc.scdn.co/liked-songs/liked-songs-300.png"
            alt=""
          />
        </div>

        <div className="opa">
          <img
            src="https://daily-mix.scdn.co/covers/on_repeat/PZN_On_Repeat2_LARGE-en.jpg"
            alt=""
          />
        </div>

        <div className="opa">
          <img
            src="https://misc.scdn.co/liked-songs/liked-songs-300.png"
            alt=""
          />
        </div>

        <div className="opa">
          <img
            src="https://daily-mix.scdn.co/covers/on_repeat/PZN_On_Repeat2_LARGE-en.jpg"
            alt=""
          />
        </div>

        <div className="opa">
          <img
            src="https://misc.scdn.co/liked-songs/liked-songs-300.png"
            alt=""
          />
        </div>
      </section>
    </Container>
  );
}

export { HomePage };
