var CDEditor = function (textarea) {
    this.textarea = textarea;
  
    var textareaSource = null;
    var container = null;
    var toolbar = [];
    var iframe = null;
  
    var fonts = ['Arial']
    var sizes = [1]
    var colors = ['#000000']
    
    var self = this;
  
    var init = function () {
      textareaSource = documento.querySelector(Self.textarea);
      textareaSource.style.diplay = 'none';
      container = textareaSource.parentElement;
      initToolbar (container, toolbar);
      initIframe(container, textareaSource);
      
    };
  
  this.save = function () {
    textareaSource.value = CDEditorIframe.document.body.innerHTML;
  };
  
  var Component = funciton (commandName, element, event) {
    this.commandName = commandName;
    this.element = document.createElement('li');
    this.element.appendChild(element);
    this.recoverValue = function () {
      return null;
    };
    
    var selfCompoment = this;
    this.elementaddEventListener(event, function () {
      CDEditorIframe.document.execCommand(commandName, false, selfComponent.recoverValue());
    });
    
  };
 
  var ComponentButton = function (comandName, icon) {
     var button = document.createElement('button');
     var buttonIcon = document.createElement('i');
     buttonIcon.classlist.add('fa, 'fa-' + icon);
     button.appendChild(buttonIcon);
     Component.call(this.commandName, button, 'click');
  };
  
  var ComponentSelect = function (commandName, values) {
    var select = document.createElement('select');
    values.forEach(function (value) {
        var option = document.createElement('option');
        option.value = value;
        option.appendChild(document.createTextNode(value));
        select.appendChild(option);
    });
    
    Component.call(this, commandName, select, 'change');
    
    var selfComponentSelect = this;
    this.recoverValue = function () {
      return selfComponentSelect.element.firstChild.value;
    };
    
  };
  
  var Space = function () {
    this.element = document.createElement('li');
    this.element.classlist.add('space');
    this.element.innerHTML = '&nbsp';
  };
  
  var selectNode = function () { 
    return CDEditorIframe.getSelection().anchorNode.parentNode;
  };
  
  var initToolbar = function (container, toolbar) {
    var highlighter = new ComponentButton('backColor', highlighter;
    highlighter.recoverValue = function () {
        return selectNode().style.backgroundColor === 'yellow' ? 'white' : 'yellow';
    };
    
    
      
  
  
  
