<section class="content">
  <div class="slanted">
    <p>slanted</p>
  </div>
  <section class="header">
    <h1 class="title">Futura</h1>
    <h2 class="title-small">The geometric <br class="mobile-br">sans-serif font</h2>
  </section>
  <section class="introduction">
    <p class="introduction-text"><img class="introduction-shapes" src="./assets/img/shapes.svg" alt="geometric shapes"><br class="mobile-br">
      Futura was designed in 1927 by Paul Renner as a contribution on the <span class="underline">New Frankfurt-project</span>.
      It’s based on <span class="underline">geometric shapes</span>, similar in spirit to the <span class="underline">Bauhaus</span> design style of the period.
    <p>
  </section>
  <section class="characteristics">
    <h3 class="section-title character-title">Characteristics<br>of Futura</h3>
    <?php foreach($characteristics as $characteristic): ?>
      <div class="character_item">
        <div>
          <hr>
          <p class="character_item-title"><img class="character-shapes" src="./assets/img/shapes2.svg" alt="geometric shapes"><?php echo $characteristic->title ?></p>
          <hr>
          <p class="character_item-description"><?php echo $characteristic->description ?></p>
        </div>
        <img class="character_item-image" src="./assets/letters/<?php echo $characteristic->id ?>.svg" alt="<?php echo $characteristic->title ?>">
      </div>
    <?php endforeach; ?>
  </section>
</section>
