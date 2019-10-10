<template>
  <div class="tags">
    <div class="tag">
      <span>TAGS:</span>
    </div>
    <div class="tags-list">
      <ol class="breadcrumb">
        <li><a href="#">daxone</a></li>
        <li><a href="#">daxone</a></li>
        <li><a href="#">daxone</a></li>
        <li><a href="#">daxone</a></li>
        <li><a href="#">daxone</a></li>
        <li><a href="#">daxone</a></li>
        <li><a href="#">daxone</a></li>
        <li><a href="#">daxone</a></li>
        <li><a href="#">daxone</a></li>
        <li><a href="#">daxone</a></li>
        <li><a href="#">daxone</a></li>
        <li><a href="#">daxone</a></li>
        <li><a href="#">daxone</a></li>
        <li><a href="#">daxone</a></li>
        <li><a href="#">daxone</a></li>
        <li><a href="#">daxone</a></li>
        <li><a href="#">daxone</a></li>
        <li><a href="#">daxone</a></li>
        <li><a href="#">daxone</a></li>
        <li><a href="#">daxone</a></li>
        <li><a href="#">daxone</a></li>
      </ol>
    </div>
  </div>
</template>
<script>
export default {
    name: 'Tags',
}
</script>
<style>
.tags{
  font-size: 14px;
  width: 50%;
  margin: 0 auto;
}
.tags .tag{
  display: inline-block;
  font-weight: bolder;
  letter-spacing: 1px;
}
.tags .tags-list{
  display: inline-block;
  font-style:italic;
}
.tags .tags-list ol li a{
  color: #373737;
  font-weight: 300;
}
.tags .tags-list ol li a:hover{
  color: #ff5151;
}
</style>