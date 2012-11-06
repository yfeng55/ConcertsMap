<?php
require 'twitter.php';

$list = new Twitter;
$tweets = $list->getTweets();

echo '<h2>Tweets from Calvin Harris</h2>';

echo '<ul>';
foreach($tweets as $tweet) {
	echo '<li>';
	echo $tweet->text;
	echo '</li><br/>';
}
echo '</ul>';
?>