/**
 * @class Alloy.Controller.UI
 * 
 * Provides convenience methods for working with Titanium UI objects.
 */

/**
 * @method create
 * Creates a Titanium UI object with the specified styles.
 * #### Example
 * The following creates a new {@link Titanium.UI.View View} object and assigns the "dialog"
 * TSS class (defined elsewhere) to the view, and finally adds it to main window.

    var view = $.UI.create("View", {
        classes: 'dialog'
    });
    $.index.add(view);
 * @param {String} apiName Name of the Titanium object to create. This can either be the full class
 * name, such as `Ti.UI.Button`, or the XML element, such as `Button`.
 * @param {AlloyStyleDict} opts Dictionary of styles to apply. `opts` may also contain any additional properties you would like to apply directly the created Titanium object.
 * @return {Titanium.UI.View/Alloy.Controller}
 * @since 1.2.0
 */

/**
 * @class AlloyStyleDict
 * @typestr Object
 * @since 1.2.0
 * @pseudo
 * Simple JavaScript object of properties and TSS classes to apply to a Titanium UI object.
 *
 * All properties are optional.
 *
 * The `apiName` property is only specified with the `createStyle` method.
 *
 * In addition to the properties defined below, you can also specify properties related to the
 * component.
 */

/**
 * @property apiName
 * @type String
 * Name of the Titanium UI object. This can either be the full class name, such as
 * `Ti.UI.Button`, or the XML element, such as `Button`.
 *
 * Specified only with {@link Alloy.Controller#method-createStyle createStyle}.
 */

/**
 * @property classes
 * @type Array<String>
 * Array of TSS classes to apply to the Titanium UI object.
 */

/**
 * @property id
 * @type String
 * TSS ID style to apply to the Titanium UI object.
 */
