<section class="content">
  <div class="slanted">
    <p>slanted</p>
  </div>
  <section class="header">
    <h1 class="title">Futura</h1>
    <h2 class="title-small animateBottom">The geometric <br class="mobile-br">sans-serif font</h2>
    <svg class="header-background" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
      <?php echo $svgs->background ?>
    </svg>
    <a class="background-heart"><span>Click here</span><br>if you &#9829; Futura</a>
    <img class="scroll-down" src="./assets/img/header/scroll.svg" alt="Scroll down">
  </section>
  <section class="introduction" id="intro">
    <p class="introduction-text animateBottom"><img class="introduction-shapes" src="./assets/img/shapes/shapes.svg" alt="geometric shapes"><br class="mobile-br">
      Futura was designed in 1927 by Paul Renner as a contribution to the <span class="underline">New Frankfurt project</span>.
      It’s based on <span class="underline">geometric shapes</span>, similar in spirit to the <span class="underline">Bauhaus</span> design style of the period.
    <p>
  </section>
  <section class="rotating-shapes">
    <img class="rotating-shape rotating-shape-one" src="./assets/img/shape/shape2.svg" alt="Geometric shape">
    <img class="rotating-shape rotating-shape-two" src="./assets/img/shape/shape1.svg" alt="Geometric shape">
    <img class="rotating-shape rotating-shape-three" src="./assets/img/shape/shape3.svg" alt="Geometric shape">
  </section>
  <section class="characteristics" id="characteristics">
    <h3 class="section-title character-title animateBottom">Characteristics<br><span class="br-2">of Futura</span></h3>
    <div class="character_item-wrapper">
      <?php foreach($characteristics as $characteristic): ?>
        <div class="character_item">
          <div class="character_item-text">
            <hr class="animateLines">
            <p class="character_item-title"><img class="character-shapes" src="./assets/img/shapes/shapes2.svg" alt="geometric shapes"><?php echo $characteristic->title ?></p>
            <hr class="animateLines">
            <p class="character_item-description"><?php echo $characteristic->description ?></p>
          </div>
          <div class="character_item-image">
          <img class="character-image" src="./assets/img/letters/<?php echo $characteristic->id ?>.svg" alt="<?php echo $characteristic->title ?>">
          </div>
        </div>
       <?php endforeach; ?>
    </div>
  </section>
  <section class="paul_renner" id="paul">
    <div class="paul_renner-pin">
      <div class="paul_renner-wrap to-right">
        <div class="paul_renner-intro">
          <div class="paul_renner-intro-text">
            <h3 class="section-title paul_renner-title animateBottom"><span class="br-1">The man</span><br><span class="br-2">behind Futura:</span><br>Paul Renner</h3>
            <p class="paul_renner-desc">How a boy born in Prussia changed <br class="mobile-br">the typeface world forever</p>
          </div>
          <picture>
            <img
            class="paul_renner-image"
            sizes="(max-width: 907px) 100vw, 907px"
            srcset="
            ./assets/img/paul/paul/paul-200.jpg 200w,
            ./assets/img/paul/paul/paul-492.jpg 492w,
            ./assets/img/paul/paul/paul-682.jpg 682w,
            ./assets/img/paul/paul/paul-847.jpg 847w,
            ./assets/img/paul/paul/paul-907.jpg 907w"
            src="paul_ec2zeb_c_scale,w_907.jpg"
            alt="Paul Renner">
          </picture>
        </div>
        <?php foreach($stories as $story): ?>
        <div class="paul_story">
          <div class="paul_story-text">
            <hr>
           <p><?php echo $story->text ?></p>
          </div>
          <?php if ($story->has_image == '1'): ?>
            <div class="paul_story-image">
              <?php echo $story->image ?>
              <p class="paul_story-image-text"><img class="paul_story-shapes" src="./assets/img/shapes/shapes3.svg" alt="geometric shapes"><?php echo $story->image_desc ?></p>
            </div>
          <?php endif; ?>
        </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>
  <section class="today" id="today">
    <h3 class="today-title"><span class="today-title-span">Futura</span><br class="mobile-br"> used today</h3>
    <div class="today-gallary">
    <?php foreach($todays as $today): ?>
      <div class="gallary-image-wrapper"><?php echo $today->src ?></div>
    <?php endforeach; ?>
    </div>
    <h3 class="today-title"><span class="today-title-span">Futura</span><br class="mobile-br"> used today</h3>
  </section>
  <section class="series">
    <h3 class="section-title series-title"><span class="br-1">Enjoyed</span><br>the story<br><span class="br-2">of Futura?</span></h3>
    <div class="series-text-wrapper">
      <p class="introduction-text series-text"><img class="introduction-shapes" src="./assets/img/shapes/shapes2.svg" alt="geometric shapes">This is from a series where we bring world-changing typefaces into the spotlight. You can find more stories on the <span class="underline"><a class="slanted-link" href="https://www.slanted.de/" target="_blank" rel="noopener noreferrer">slanted</a></span> website</p>
    </div>
  </section>
  <section class="links">
    <p class="links-title">Quick links</p>
    <ul class="links-list">
      <li class="links-item"><a class="item-link" href=#intro>Intro</a></li>
      <li class="links-item"><a class="item-link" href=#characteristics>Characteristics</a></li>
      <li class="links-item"><a class="item-link" href=#paul>Paul Renner</a></li>
      <li class="links-item"><a class="item-link" href=#today>Used Today</a></li>
    </ul>
  </section>
  <footer class="footer">
    <p>Website made by <a class="footer-link" href="https://jennecattoor.com/" target="_blank" rel="noopener noreferrer">Jenne Cattoor</a></p>
  </footer>
</section>
