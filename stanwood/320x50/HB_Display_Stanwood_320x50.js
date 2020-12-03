(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Heritage_Vert_2c_RGBeps = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Heritage_Vert_2c_RGB.eps
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#14509B").s().p("AoVIWIAAwrIQrAAIAAQrgABAA4IgFADQgEADgDAGIgMAaIgOBTQgCAGACAGIAOArIADAMIAICBIAKBbIEgAcICPAAIAAnbIgDgDQgDgFgFABIgHABQgFABgFgCIgHgEQgFgCAAAFQgBAGAEADIAGAGQAEAEgFADIgGACQgEADABAFIABABIAFAWIACAEQADAGgFAAIgLgEQgFAAgEgEIgCgDQgEgEgFABIgqAJQgFABgDAFIgLASQgEAFgFABIgLABQgGABAAgHIAAgEQAAgGgFABIgXAFQgGABABAGIABANQABAHgGABIgNACQgFABgDAGIgFANQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABIgEgBIgKgGQgFgDACgGIABgCQACgGgDgFIgFgLQgDgGgFACIgJAEQgGACgFgBIgFgBQgFgCAAgGIABgQQAAgGgFACIgEABQgEABgEAFIgEAEQgEAFAEAEIAMARQADAFgFAAIgIAAQgGAAgDAFIgCADQgDAEgGABIgLABQgFAAADgFIACgDQADgFgCgDQgCgDgFAAIgNABQgFABgFgDIgDgCQgFgDADgGIADgHQACgFgFgBIgUgDQgFgBgBAGIgBAHQgBAGgFABIgDABQgFABAAgGIAAgRQAAgHgEAFIgFAGQgDAFgEgCQgEgBAAgHIAAgWQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgBAAIgCAAgAnrHsICoAAIDyggIAJgRIAEgMIAPhHQACgFAAgHIgChfQAAgHgCgFIgKglQgDgFAAgGIAAgJQAAgGgFgEIgdgfQgFgEgCgGIgMgdQgBgEgFgGIgOgTQgEgFgFgBIgYgDQgGgBgDgEIgMgNQgEgDgFgBIgqgCQgFAAgEAFIgGAHQgEAFgFAAIgQABIgTgCQgGgBgEACIgIAFQgFACAEAEIAGAGQAEADAAAHIAAAGQAAAGgFAAIgRgCQgFAAgFAEIgKAJQgDAEgGAAIgqgBQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAgBAAAAIgBgBQABgGgFgDQgJgFgDAAQgBAAgEAHIgEAHQgCAGgGgBIgWgFQgGgBAAgGIAAgHQAAgGgFgBIgNgCIgBAAgAh3AzIASAOQAEADABAGIAAABIAMAbQADAGADAEIAVAUIAJAHIATAJQAFACACgFIAQguIANgbQACgFAAgHIAAgBQAAgGgDgEIgsgyIgugpIgJgIIgJgIQgFgDgFAAIgEgBQgBAAAAABQgBAAgBAAQAAAAAAABQAAAAAAABIAAAGQABAGgEAAQgDAAgEgFIgEgGQgDgFgGACIgMAEQgFABAAAHIAAAGQAAAGgGABIgFABQgFABgEgDIgDgCQgEgEgEAEIgVAVQgEAEgCAGIAAACQgCAGgFAAIgEAAQgGAAgCgFQgDgIgDAAQgCAAgDAEIgDAFQgCAEACAFIAFAKQADAEAGABIAlADQAFAAAEADIAGAEQAFADADAEIACABQADAEAGABIAWAEIALABIADAAIACAAQAEAAAEADgACfAjIAJAGIACABIAIAGQAEACADgFIAIgOQADgFgGAAIgOgBQgFAAgCgFIgFgMQgCgGgFgCQgFgCgEABIgNACQgFABgBgFIgDgPQgBgGgDgEIgJgLQgDgEgEAEIgEAEQgDAEgFgCIgJgEQgDgCgGABQgFACgBAGIgDAZQAAAFgDAGIgHAQQgCAFABAGQABAHAEgDIAHgEQAEgCAGAAIANAAIAKAAIADgBIAogFQACAAANAKgAhShdIgHANQgCAFACAFIAEAFQADAFADAAQAFABAHAGIAdAZQAFAFAEAAIADABQAFABADAGIAIANIAHAIIAMAKQAFAEAFAAIAGABQAFABADgGIAFgKIADgLIACgYIgDgZQAAgEgEgHIgCgEQgDgFgFgDQgGgEgGACIgPACIgPABQgFAAgEAEIgEADQgFAEgEAAIgLgBIgKgGQgFgEgDgDIgBgBQgEgEgBgGIAAgCQgBgGgDAAQgCAAgDAFgAnBgwIABAFQABAGAFgCIALgFQAFgBgCgGQgCgFACgFIAIgOQADgGgEgEQgEgEAEgEIAKgKQAEgDgBgHIgBgDQgBgFADgGIADgHIABgEQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAAAIgEAAIgKACIgMAFQgFACgDgFIgCgEQgDgEgEAEIgDAFQgEAFgFgCQgDgHgDgDQgCgBACgGIACgFQABgCgFgCIgGgDIgGgHQgDgEgGABIgBAAIAACBQAJgEAbgHIACAAQADAAABAFgAGqizIAEACIAKAEIAOACQAGABABAGIADAMQACAGAFAAIASgCIADABIAAlYIvXAAIAADuIADgBIALgDQAEgBAGACIAOAHQAEADAFgDIAMgJQAFgDAEACQAEADAEgEIADgDQAFgEAFABIAGAAQAFABABgHIABgEQACgHAEgBQAFgCAFACIALAEQAFACAEgEIAKgMQAEgEAFACIALAFQAGACAEgCIALgEQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAIgVgGQgFgCAAgGIgBgNQAAgGAFgBIAOgDQAFgBAAgGIAAgFQAAgGAFgBQAFgBAFACIASAFIAJAFIAKAHQAFACACgFIABgDQACgGgEgCIgBgBQgFgDgCgGIgEgKQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAAAIADAAIAjAFQAFABgDgFIgKgMQgEgEADgGIACgDQADgFAGgBIAYgFQAFgBgEgDIgOgNQgFgDAEgFIACgEQADgEAFACIARAHQAGACAEgDIAEgCIAKgDIAWgDIALABIAHABQAFACAAAFQAAAGAFADQAQALADgCIAEgEQAEgEADAFQAEAEAFACIARAGQAFACADgFQADgFAGAAIAGgBQAFAAADAFIACAFQADAFAFAAIAJABQAGABAEADIAdAZQAFAEAFAAIAEAAQAGAAAAgGIABgGQAAgHgFgCIgGgDQgFgCgDgFIgCgDIAAgEQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIAegHQAGgBAEAEIALAJQAFADgBAHIgDATQgBAGAFACIADABQAGACAEgCIAIgFQAEgDgCgFIgGgLQgDgGAEgEIADgEQADgEAFADIANAKQAAAAABAAQAAABABAAQAAAAAAAAQABgBAAAAQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAAgFQABgGAEABIAaAGQAFABAFgBIAMgDQAJgBAEAJQACACgBADQAAAAAAABQgBABABAAQAAABAAAAQABABAAAAIACACQADADAAACIAAADQAAABAAAAQAAABABAAQAAABABAAQAAABABAAIADAAQADAAABADQACADgBACIgCAHIAHAHQAGAFgEAHIgCABIAAABIAAAAIgBAGQgBADgEgBQgGgBgCABQgBABAAAAQAAAAgBABQAAAAAAAAQAAABAAAAIAAACQAAAEAEABIADABQAEABABADIACAEQACADAEgBIADgBQAEgCADACQACACABAEIABAIIABABIAIgGIADgEQAEgFgEgFIgMgQQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAAgBABAAQAAAAABAAIAJAAQAEAAAEgFIADgDQADgFAFAAIALgBQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAIgBAEIgBADQgDAFACADQABAEAGgBIAMgBQAFAAAFACIADACQAFADgCAFIgEAIQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAQABAAAAAAIAUADQAFAAABgFIABgIQABgGAFgBIADAAQAGgBAAAGIAAARQAAAGADgEIAFgGQAEgFADACQAEACAAAGIABAWQAAAGAEgDIADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAGALgRALIgKADIgFAEQgCADgBADIAAACQgBAHAGgBIAKgBQAHgBADgCIALgFQAFgDAFABIAZABQAGAAgBAHIgDAXQAAAGgFgCIgLgFQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgDADIAAABQgDAFgFABIgNABQgFABABAGIADAHQACAGAFgBIAJgBIACgBQAEAAAEADg");
	this.shape.setTransform(161.525,53.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQQAQgQAWAAQAWAAARAQQAPAQAAAWQAAAXgPAQQgRAQgWAAQgWAAgQgQg");
	this.shape_1.setTransform(150.2,149.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABNDVQgMgMgJgbQgoAZgPAHQgmATgkAAQg7AAgiglQgggigBg0QAAgkARgaQAWggArgMIBpghQA3gTAOgPIAAgfQAAhahNAAQgcAAgUASQgXAUgOAuQgFAagZAAQgQAAgOgKQgSgNAAgTQAAgmAwgeQAzggBIAAQBYAAAkAoQAbAdAAAzIAADSQgBBEAeAGQASADAOgCIAAAXQgSAJgXAGQgYAGgWAAQgWAAgOgMgAgpAIQglAOgPASQgPATAAAfQAAAnAVAXQAVAZAmAAQAgAAAWgRQAfgXAAguIAAh8QgSAMhQAdg");
	this.shape_2.setTransform(214.65,183.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AheDcIAAgWQAmgDAIgIQAHgIAAgfIAAkYQABgXgGgGQgFgIgRgCIgagDIAAgVICJgYIAAFvQAAAeAIAIQAIAIAkADIAAAXg");
	this.shape_3.setTransform(150.15,183.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgcECQglgaAAg5IAAkuIg+AAIAAglIBCAAIA6htIAXAAIAABtIBsAAIAAAlIhsAAIAAENQAAAsARAXQAPAUAYAAQAdAAAXgJIAAAZQgzAegtAAQgjgBgZgQg");
	this.shape_4.setTransform(176.925,179);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AiVDcIAAgXQAlgDAIgIQAIgIAAgeIAAkYQAAgXgFgHQgFgHgSgCIgZgDIAAgXIB/gVIALBIQAtgqAVgOQAagRAWAAQAYAAAMAPQALAMAAARQAAAVgMAQQgNARgRAAQgKAAgIgGQgfgVgUAAQgTAAgOAUQgRAYAAAtIAADPQAAAdAIAIQAIAJAlACIAAAYg");
	this.shape_5.setTransform(120.175,183.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AiPCmQgug3AAhsQAAhmAyg8QA1hBBiAAQBpAAAsBFQAdAsAABAQAAAkgkAAIj5AAQgCBQAZAwQAgA+BIAAQAvAAAggbQAZgVAUgrIAcAPQgqB6iCAAQhpAAgyg7gAhMiGQgSAnAAAvIChAAQARAAAHgHQAGgGAAgPQAAgpgPgdQgXgugzAAQg6AAgaA6g");
	this.shape_6.setTransform(304.075,183.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AiUEoQg5gjAAg/QAAgpAlgaQAWgRAqgOIAAgCQgfgDgWgVQgWgVAAgZQAAgxBNgcIAAgCQgjgLgXgaQgfgkAAg5QAAg7AognQAvgwBeAAQAeAAAfAIQAhAHASAMIBogWIAAA6IhJAAQAMALAIAXQAIAYAAAaQAABKg5AmQgvAehIAAQgZAAgYgDQgoAOAAAZQAAAkBIAAIBPAAQCeABAAB+QAAArgWAkQgSAfgiAVQgeATgkAJQgjAIgrAAQhTAAg0gggAhiB/QgeAXAAAoQAAAwAnAdQAlAcA6AAIABAAQAzAAAigZQAkgbABgxQgBgvghgVQgfgShDgBQhEAAgbAUgAhKkNQgcAeAAA8QAAA1AaAdQAYAaAnAAQAmAAAXgbQAZgcAAg1QAAg7gbgfQgXgagjAAIgBAAQgmAAgXAag");
	this.shape_7.setTransform(259.3,194.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AiPCmQgug3AAhsQAAhmAxg8QA2hBBiAAQBpAAAsBFQAdAsAABAQAAAkglAAIj5AAQgBBQAZAwQAgA+BIAAQAvAAAggbQAZgUAUgsIAcAPQgqB6iCAAQhpAAgyg7gAhNiGQgSAnAAAvICiAAQARAAAHgHQAGgGAAgPQAAgpgPgdQgXgugzAAQg6AAgbA6g");
	this.shape_8.setTransform(81.4,183.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ABWEvIAAgXQAogEAJgJQAIgIAAgiIAAjdIkbAAIAADdQAAAiAIAIQAJAJAoAEIAAAXIjOAAIAAgXQAogEAJgJQAHgIAAgiIAAnCQAAgigHgIQgJgJgogDIAAgXIDOAAIAAAXQgoADgJAJQgIAJAAAhIAADDIEbAAIAAjDQAAgigIgIQgJgJgogDIAAgXIDMAAIAAAXQgmADgJAJQgHAJAAAhIAAHCQAAAhAHAIQAJAKAmADIAAAYg");
	this.shape_9.setTransform(28.975,175.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#14509B").s().p("AAuB9Ihsh9IgCAAIAAB9IgsAAIAAj5IAsAAIAABsIACAAIBnhsIA8AAIh0B0IB8CFg");
	this.shape_10.setTransform(204.025,239.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#14509B").s().p("AA1B9Ih1jAIgBAAIAADAIgsAAIAAj5IA7AAIBzC6IABAAIAAi6IAsAAIAAD5g");
	this.shape_11.setTransform(174.5,239.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#14509B").s().p("ABNB9IgYg6IhrAAIgXA6IgxAAIBsj5IAmAAIBrD5gAgnAdIBNAAIgmhkg");
	this.shape_12.setTransform(146.175,239.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#14509B").s().p("AhbB9IAAj5IBgAAQAPAAANADQANADALAJQALAGAHANQAHAMAAARQAAAVgMAOQgMAOgUAFIAAABQAYAEAPANQAPAPAAAaQAAATgIAQQgIAOgNAIQgOAIgRAEQgSAEgPAAgAgvBYIA5gCQAIAAALgFQAHgDAGgIQAGgIAAgMQAAgUgOgIQgOgHgZAAIgqAAgAgvgXIAoAAQAUABANgJQALgJAAgQQAAgRgMgHQgMgHgYgBIgkAAg");
	this.shape_13.setTransform(120.775,239.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,323.1,251.9);


(lib.HEAD1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#14509B").s().p("AASBXIgrg5IgBAAIAAA5IgbAAIAAitIAbAAIAABtIABAAIApguIAjAAIgvAyIAyA8g");
	this.shape.setTransform(211.025,41.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#14509B").s().p("AggA5IAAhuIAaAAIAAATIABAAQAEgKAIgGQAIgGALAAIADAAIAEABIAAAZIgFgBIgDAAQgKAAgGADQgFAEgEAFQgCAFgBAFIgCAIIAAA6g");
	this.shape_1.setTransform(201,44.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#14509B").s().p("AgXA2QgLgEgHgJQgJgHgEgLQgFgKAAgNQAAgNAFgKQAEgLAJgHQAHgIALgFQAMgDALAAQAMAAALADQALAFAJAIQAHAHAGALQAEAKAAANQAAANgEAKQgGALgHAHQgJAJgLAEQgLAEgMABQgLgBgMgEgAgNggQgGADgEAFQgEAFgCAHQgCAGAAAGQAAAGACAGQACAHAEAFQAEAFAGADQAGADAHAAQAJAAAFgDQAHgDADgFQAEgFACgHQACgGAAgGQAAgGgCgGQgCgHgEgFQgDgFgHgDQgFgDgJAAQgHAAgGADg");
	this.shape_2.setTransform(189.55,44.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#14509B").s().p("AAZA3IgZhMIAAAAIgYBMIgcAAIgnhtIAeAAIAYBOIAYhOIAcAAIAYBOIABAAIAWhOIAdAAIgmBtg");
	this.shape_3.setTransform(173.85,44.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#14509B").s().p("AgTA2QgLgEgIgHQgIgIgEgKQgFgLAAgOQAAgMAFgKQAEgMAIgHQAHgIALgFQALgDAMAAQALAAAKADQAJAEAIAIQAHAHAEALQAEAMAAANIAAAEIgBADIhTAAQABAGADAGQACAFAFADQAEADAFACQAGACAFAAQAKABAIgEQAHgEAFgGIASAOQgRAXgeAAQgNgBgKgEgAAcgLIgBgJQgCgFgDgEQgDgDgFgDQgFgCgGAAQgMAAgJAHQgIAIgCALIA4AAIAAAAg");
	this.shape_4.setTransform(153.25,44.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#14509B").s().p("AAZA3IgZhMIAAAAIgYBMIgcAAIgnhtIAeAAIAXBOIAZhOIAcAAIAYBOIABAAIAWhOIAdAAIgmBtg");
	this.shape_5.setTransform(137.95,44.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#14509B").s().p("AAZA3IgZhMIAAAAIgYBMIgcAAIgnhtIAfAAIAWBOIAZhOIAcAAIAYBOIABAAIAWhOIAeAAIgnBtg");
	this.shape_6.setTransform(114.75,44.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#14509B").s().p("AgWA2QgMgEgHgJQgJgHgEgLQgFgKAAgNQAAgNAFgKQAEgLAJgHQAHgIAMgFQALgDALAAQAMAAALADQALAFAJAIQAHAHAGALQAEAKAAANQAAANgEAKQgGALgHAHQgJAJgLAEQgLAEgMABQgLgBgLgEgAgNggQgGADgEAFQgEAFgCAHQgCAGAAAGQAAAGACAGQACAHAEAFQAEAFAGADQAGADAHAAQAJAAAFgDQAHgDADgFQAEgFACgHQACgGAAgGQAAgGgCgGQgCgHgEgFQgDgFgHgDQgFgDgJAAQgHAAgGADg");
	this.shape_7.setTransform(99,44.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#14509B").s().p("AAXBXIAAg9IAAgKIgDgJQgCgEgEgDQgEgCgHAAQgGAAgFACQgFACgDAFQgDAEgBAFQgCAFAAAGIAAA8IgcAAIAAitIAcAAIAABPIAAAAIAFgHIAHgFQAEgEAGgBQAEgCAGABQALAAAIADQAHAEAFAGQAFAGADAHQACAJAAAIIAABFg");
	this.shape_8.setTransform(85.875,41.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#14509B").s().p("AgZA1QgMgEgIgJIASgRQAFAGAHAEQAIAEAIAAIAGgBIAGgCIAEgEQABgDAAgDQAAgHgGgDQgGgDgMgDIgMgEQgGgCgEgDQgFgDgDgGQgDgFAAgHQAAgJAEgHQAEgHAGgEQAGgFAIgCQAIgBAHAAQAMAAAMADQALAFAHAIIgSAQQgEgFgGgDQgHgEgHAAQgGAAgGADQgFADAAAGQAAAGAGADQAGADALACIAMAEQAHACAFAEQAFADADAFQAEAHAAAIQAAAKgEAHQgEAGgGAFQgHAFgIABQgJACgIABQgMAAgNgGg");
	this.shape_9.setTransform(69.075,44.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#14509B").s().p("AgNBSIAAhtIAbAAIAABtgAgMg1QgFgFAAgHQAAgGAFgFQAFgFAHAAQAHAAAGAFQAFAEAAAHQAAAIgFAEQgGAFgHAAQgHAAgFgFg");
	this.shape_10.setTransform(61.575,42.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#14509B").s().p("AASBXIgrg5IgBAAIAAA5IgbAAIAAitIAbAAIAABtIABAAIApguIAjAAIgvAyIAyA8g");
	this.shape_11.setTransform(48.425,41.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#14509B").s().p("AggA5IAAhuIAaAAIAAATIABAAQAFgKAHgGQAIgGALAAIADAAIAEABIAAAZIgFgBIgDAAQgKAAgGADQgGAEgDAFQgCAFgBAFIgBAIIAAA6g");
	this.shape_12.setTransform(38.4,44.725);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#14509B").s().p("AgXA2QgKgEgJgJQgHgHgFgLQgFgKAAgNQAAgNAFgKQAFgLAHgHQAJgIAKgFQAMgDALAAQAMAAAMADQAKAFAJAIQAIAHAEALQAFAKAAANQAAANgFAKQgEALgIAHQgJAJgKAEQgMAEgMABQgLgBgMgEgAgNggQgGADgEAFQgEAFgCAHQgCAGAAAGQAAAGACAGQACAHAEAFQAEAFAGADQAGADAHAAQAIAAAHgDQAFgDAFgFQADgFACgHQACgGAAgGQAAgGgCgGQgCgHgDgFQgFgFgFgDQgHgDgIAAQgHAAgGADg");
	this.shape_13.setTransform(26.95,44.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#14509B").s().p("AAZA3IgZhMIAAAAIgYBMIgcAAIgnhtIAfAAIAWBOIAZhOIAcAAIAYBOIABAAIAWhOIAeAAIgnBtg");
	this.shape_14.setTransform(11.25,44.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#14509B").s().p("AgbA1QgIgEgFgGQgFgGgCgIQgDgJAAgIIAAhEIAcAAIAAA8IABAKQAAAGADAEQACAEAEADQAEADAHAAQAFAAAFgDQAFgCADgEQADgFACgFIABgLIAAg8IAcAAIAABuIgaAAIAAgSIgBAAQgDAIgJAGQgKAHgLAAQgLAAgHgEg");
	this.shape_15.setTransform(180.325,19.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#14509B").s().p("AgWA2QgMgFgHgHQgJgIgEgLQgFgLAAgMQAAgNAFgLQAEgKAJgIQAHgIAMgEQAKgDAMAAQANAAALADQALAEAIAIQAHAIAFAKQAFALAAANQAAAMgFALQgFALgHAIQgIAHgLAFQgLAFgNAAQgMAAgKgFgAgNggQgGADgEAFQgEAFgCAHQgCAGAAAGQAAAGACAGQACAGAEAGQAEAFAGADQAGADAHAAQAIAAAHgDQAFgDAEgFQAEgGACgGQACgGAAgGQAAgGgCgGQgCgHgEgFQgEgFgFgDQgHgDgIAAQgHAAgGADg");
	this.shape_16.setTransform(167.2,19.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#14509B").s().p("AgpBTIgHgCIACgYIAFABIAFABIAIgCIAEgCIAFgGIADgIIAGgNIgwhuIAfAAIAdBQIABAAIAbhQIAdAAIg0CFIgHAOQgCAFgFAEQgFAFgGACQgHACgJAAg");
	this.shape_17.setTransform(154.85,22.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#14509B").s().p("AAZA3IgZhMIAAAAIgYBMIgcAAIgnhtIAfAAIAWBOIAZhOIAcAAIAYBOIABAAIAWhOIAeAAIgnBtg");
	this.shape_18.setTransform(135,19.475);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#14509B").s().p("AgWA2QgMgFgHgHQgJgIgEgLQgFgLAAgMQAAgNAFgLQAEgKAJgIQAHgIAMgEQALgDALAAQAMAAALADQALAEAJAIQAHAIAGAKQAEALAAANQAAAMgEALQgGALgHAIQgJAHgLAFQgLAFgMAAQgLAAgLgFgAgNggQgGADgEAFQgEAFgCAHQgCAGAAAGQAAAGACAGQACAGAEAGQAEAFAGADQAGADAHAAQAJAAAFgDQAHgDADgFQAEgGACgGQACgGAAgGQAAgGgCgGQgCgHgEgFQgDgFgHgDQgFgDgJAAQgHAAgGADg");
	this.shape_19.setTransform(119.25,19.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#14509B").s().p("AAXBXIAAg9IAAgKIgDgJQgCgEgEgDQgEgCgHAAQgGAAgFACQgFACgDAEQgDAEgBAGQgCAFAAAGIAAA8IgcAAIAAitIAcAAIAABPIAAAAIAFgHIAHgGQAEgDAGgBQAEgBAGAAQALgBAIAEQAHAEAFAGQAFAGADAIQACAHAAAJIAABFg");
	this.shape_20.setTransform(106.125,16.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#14509B").s().p("AgQBTIgPgDIgOgGIgMgIIAQgWQAIAIAKAEQALAFAKAAQAJAAAGgEQAHgDAEgEQAEgGACgHQACgGgBgJIAAgIIAAAAQgGAJgJADQgJAFgLAAQgNAAgJgFQgLgEgGgIQgIgIgDgJQgFgLAAgMQAAgMAFgKQADgLAHgHQAIgJAKgEQAJgFAMABQAMgBAKAFQAJAFAGAKIABAAIAAgRIAaAAIAABkQAAAPgDAMQgEAMgHAIQgJAJgLAFQgMAEgPAAgAgMg7QgGADgEAFQgEAFgCAHQgCAFgBAIQABAHACAGQACAGAEAFQAEAEAGADQAGADAGAAQAIAAAGgDQAGgDAEgDQAEgGADgGQACgGAAgHQAAgHgCgGQgDgHgEgFQgEgEgGgEQgGgCgHAAQgHAAgGACg");
	this.shape_21.setTransform(87.05,22.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#14509B").s().p("AAXA5IAAg8IgBgLQAAgFgCgEQgDgEgEgDQgEgDgGAAQgGAAgFADQgFACgDAFQgDAEgCAFQgCAFAAAGIAAA8IgbAAIAAhuIAaAAIAAASQAFgIAIgHQAJgGAMAAQALAAAIAEQAHAEAFAGQAFAGACAIQADAIAAAJIAABEg");
	this.shape_22.setTransform(74,19.325);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#14509B").s().p("AgNBSIAAhtIAbAAIAABtgAgMg1QgFgFAAgHQAAgGAFgFQAFgFAHAAQAHAAAGAFQAFAEAAAHQAAAIgFAEQgGAFgHAAQgHAAgFgFg");
	this.shape_23.setTransform(64.675,16.775);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#14509B").s().p("AAZA3IgZhMIAAAAIgYBMIgcAAIgnhtIAeAAIAXBOIAZhOIAcAAIAYBOIABAAIAWhOIAdAAIgmBtg");
	this.shape_24.setTransform(52.9,19.475);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#14509B").s().p("AgWA2QgMgFgHgHQgJgIgEgLQgFgLAAgMQAAgNAFgLQAEgKAJgIQAHgIAMgEQAKgDAMAAQANAAALADQALAEAIAIQAHAIAFAKQAFALAAANQAAAMgFALQgFALgHAIQgIAHgLAFQgLAFgNAAQgMAAgKgFgAgNggQgGADgEAFQgEAFgCAHQgCAGAAAGQAAAGACAGQACAGAEAGQAEAFAGADQAGADAHAAQAIAAAHgDQAFgDAEgFQAEgGACgGQACgGAAgGQAAgGgCgGQgCgHgEgFQgEgFgFgDQgHgDgIAAQgHAAgGADg");
	this.shape_25.setTransform(37.15,19.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#14509B").s().p("AAXA5IAAg8IgBgLQAAgFgCgEQgDgEgEgDQgEgDgHAAQgFAAgFADQgFACgDAFQgDAEgCAFQgCAFAAAGIAAA8IgbAAIAAhuIAbAAIAAASQAEgIAIgHQAJgGAMAAQALAAAIAEQAHAEAFAGQAFAGACAIQADAIAAAJIAABEg");
	this.shape_26.setTransform(24.05,19.325);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#14509B").s().p("AAeBSIhHhSIAAAAIAABSIgdAAIAAiiIAdAAIAABGIAAAAIBEhGIAnAAIhMBLIBRBXg");
	this.shape_27.setTransform(10.9,16.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(0,0,222.4,60.8), null);


(lib.CTA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMAcQgHgCgEgFIAKgJQACAEAEACQAEABADAAIADAAIADgBIADgCIABgEQAAgDgEgBIgJgDIgGgDQgDgBgCgBIgEgEQgCgDAAgEQAAgEACgEIAFgGIAIgDQAEgBADAAQAGAAAGACQAGACAEAFIgKAIQgBgDgEgCQgDgBgEAAQgDgBgDACQgCACAAADQAAADADABIAIADIAHACIAGADIAEAFQACADAAADQAAAGgCADQgCAEgEACIgHADIgJABQgGAAgGgCg");
	this.shape.setTransform(83.675,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAbQgEgCgDgCQgCgEgBgEQgCgEABgEIAAgjIAOAAIAAAeIAAAFIACAGQAAAAABABQAAAAAAABQABAAAAAAQABABAAAAQADACADgBIAFgBIAEgDIADgFIAAgGIAAgeIAPAAIAAA4IgOAAIAAgKQgCAFgFADQgEADgGAAQgGAAgEgCg");
	this.shape_1.setTransform(77.6,14.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAMAtIAAgfIgBgGIgBgFIgDgDQgCgBgDAAQgDAAgDABIgEADIgDAFIAAAGIAAAfIgOAAIAAhZIAOAAIAAApIADgEIADgDIAFgCIAFgBQAGAAAEACQAEACACADQADADABAEQACAEAAAEIAAAkg");
	this.shape_2.setTransform(67.7,12.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAJAmQgFAAgEgCQgDgBgCgDQgCgDgBgEIAAgHIAAgaIgKAAIAAgMIAKAAIAAgRIANAAIAAARIAOAAIAAAMIgOAAIAAAZQAAAEABADQACACAEAAIAEAAIADgBIAAALIgFACg");
	this.shape_3.setTransform(62.075,13.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGArIAAg4IANAAIAAA4gAgGgbQgCgDAAgDQAAgDACgDQADgDADAAQAEAAACADQADACAAAEQAAADgDADQgCADgEAAQgDAAgDgDg");
	this.shape_4.setTransform(58.525,12.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AANAdIgNgoIAAAAIgMAoIgPAAIgUg5IAQAAIAMAoIAAAAIAMgoIAPAAIAMAoIABAAIAMgoIAPAAIgUA5g");
	this.shape_5.setTransform(52.125,14.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAJAtIgWgdIAAAdIgOAAIAAhZIAOAAIAAA4IAVgXIATAAIgZAZIAaAfg");
	this.shape_6.setTransform(41.525,12.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AANAeIAAgfIgBgFIgCgFIgDgEQgCgCgEAAQgCAAgCACIgFADIgCAFIgBAGIAAAfIgPAAIAAg5IAPAAIAAAJQACgEAEgDQAFgEAGAAQAFAAAEACQAEACADAEQADADAAAEIABAJIAAAjg");
	this.shape_7.setTransform(34.35,13.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLAdIgHgDQgEgCgCgDQgCgDAAgGQAAgGAEgEQAEgCAFgCIANgEIANAAIAAgCQAAgFgEgDQgEgCgFAAQgEAAgEACIgHAFIgHgJQAEgEAHgDQAGgCAGAAQAIAAAFACQAFACACAEQADADABAEQACAFAAAEIAAAiIgOAAIAAgIIAAAAQgCAEgFADQgFACgFAAIgHgBgAACADIgGACIgFACQgCACAAADIABAEIACACIADABIAEAAQAGAAAEgDQAEgFAAgGIAAgDIgDAAg");
	this.shape_8.setTransform(27.375,14);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgeArIAAhVIAgAAIAJABIAJAFQADACACAEQADAEAAAGQAAAHgEAFQgEAFgHACQAIABAFAEQAFAFAAAJQAAAGgCAFQgDAFgFADQgEADgGABIgLACgAgPAeIANAAIAGgBIAGgCQADgBABgCQACgDAAgEQAAgGgEgDQgFgDgIAAIgOAAgAgPgHIANAAQAHAAAEgDQAEgDAAgFQAAgGgEgDQgFgCgHAAIgMAAg");
	this.shape_9.setTransform(20.575,12.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#648C3C").ss(1,1,2).p("An9iBIP7AAQAKAAAAAKIAADvQAAAKgKAAIv7AAQgKAAAAgKIAAjvQAAgKAKAAg");
	this.shape_10.setTransform(52,13);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#14509B").s().p("An9CCQgKAAAAgKIAAjvQAAgKAKAAIP7AAQAKAAAAAKIAADvQAAAKgKAAg");
	this.shape_11.setTransform(52,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-1,-1,106,28), null);


(lib.HB_logo_vert_2c = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Heritage_Vert_2c_RGBeps("synched",0);
	this.instance.setTransform(0,0,1,1,0,0,0,161.5,125.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HB_logo_vert_2c, new cjs.Rectangle(-161.5,-125.9,323.1,251.9), null);


// stage content:
(lib.HB_Display_Stanwood_320x50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [144];
	// timeline functions:
	this.frame_144 = function() {
		if(!this.alreadyExecuted){
		this.alreadyExecuted=true;
		this.loopNum=1;
		} else {
		this.loopNum++;
		if(this.loopNum==2){
		this.stop();
		}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(144).call(this.frame_144).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,2).p("A4wj0MAxhAAAQAKAAAAACIAAHmQAAABgKAAMgxhAAAQgKAAAAgBIAAnmQAAgCAKAAg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(145));

	// CTA
	this.instance = new lib.CTA();
	this.instance.setTransform(193.45,25.9,0.6689,0.6689,0,0,0,52.1,13.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(70).to({_off:false},0).to({alpha:1},5).wait(70));

	// HEAD1
	this.instance_1 = new lib.HEAD1();
	this.instance_1.setTransform(-66.7,32,0.5802,0.5802,0,0,0,100.5,41.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:65.3},14,cjs.Ease.quadOut).wait(131));

	// LOGO
	this.instance_2 = new lib.HB_logo_vert_2c();
	this.instance_2.setTransform(282.35,25.1,0.1619,0.1619,0,0,0,0.3,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(145));

	// BKGD
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_1.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(145));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(35,24.5,285.5,26);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 320,
	height: 50,
	fps: 24,
	color: "#333333",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0957C5EC3B874C629166840920B09671'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;